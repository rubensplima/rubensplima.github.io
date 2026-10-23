
/* Portfolio V4: Google Sheets público (somente leitura). */
(() => {
  const sheetId = '15fs44Pce3gsBfJLpLqtYMqrY0tv-VsVn4oTSDQ2nTTU';
  const normalize = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim().replace(/[\s-]+/g,'_');
  const value = (row, ...keys) => { for (const key of keys) { const v = row[normalize(key)]; if (v !== undefined && String(v).trim()) return String(v).trim(); } return ''; };
  const published = row => /^(sim|s|yes|true|1|publicado|published|ativo|active)$/i.test(value(row,'publicado','publicar','status','visivel','ativo','published'));
  const validUrl = s => { try { const u = new URL(s); return /^https?:$/.test(u.protocol) ? u.href : ''; } catch { return ''; } };
  const node = (tag, className, txt) => { const el=document.createElement(tag); if(className) el.className=className; if(txt) el.textContent=txt; return el; };
  const sheetCache = new Map();
  const requestVersions = new Map();
  async function loadSheet(name) {
    if (sheetCache.has(name)) return sheetCache.get(name);
    const pending = fetchSheet(name);
    sheetCache.set(name, pending);
    try { return await pending; } catch (error) { sheetCache.delete(name); throw error; }
  }
  async function fetchSheet(name) {
    const gid = name === 'Indicações' ? '2137525104' : name === 'Projetos' ? '1189701836' : null;
    const url='https://docs.google.com/spreadsheets/d/'+sheetId+'/gviz/tq?'+(gid?'gid='+gid:'sheet='+encodeURIComponent(name))+'&headers=0&tqx=out:json';
    const response=await fetch(url,{cache:'no-store'});
    if(!response.ok) throw Error('HTTP '+response.status);
    const raw=await response.text();
    const match=raw.match(/google\.visualization\.Query\.setResponse\((\{[\s\S]*\})\);?/);
    if(!match) throw Error('A aba não retornou dados públicos');
    const data=JSON.parse(match[1]);
    if(data.status==='error') throw Error(data.errors?.[0]?.message || 'Erro de consulta');
    const expected=['id','titulo','descricao','categoria','imagem_url','link_url','etiquetas','publicado','destaque','ordem','aviso_afiliado','area'];
    const cols=data.table.cols.map((c,i)=>normalize(c.label||c.id||''));
    const headerRow=(data.table.rows||[])[0]?.c?.map(c=>normalize(c?.v||''))||[];
    const headerInRows=expected.filter(k=>headerRow.includes(k)).length>=3;
    const headers=headerInRows?headerRow:cols.map((c,i)=>c || 'col_'+i);
    return (headerInRows?(data.table.rows||[]).slice(1):(data.table.rows||[])).map(r=>Object.fromEntries(headers.map((c,i)=>[c,r.c?.[i]?.v ?? ''])));
  }
  function picture(url,title) {
    const box=node('div','preview one');
    const src=validUrl(url);
    if(src) { const img=node('img'); img.src=src; img.alt='Imagem do projeto: '+title; img.loading='lazy'; img.style.cssText='width:100%;height:100%;object-fit:cover;position:relative;z-index:1'; img.onerror=()=>img.remove(); box.append(img); }
    return box;
  }
  function card(row,indication=false) {
    const title=value(row,'titulo','nome','projeto','produto','title');
    if(!title) return null;
    const card=node('article','card');
    const img=value(row,'imagem_url','url_imagem','imagem','image_url');
    if(!indication || img) card.append(picture(img,title));
    const body=node('div','cardbody');
    const label=value(row,'categoria','tipo','tag','area','category');
    if(label) body.append(node('span','tag',label));
    body.append(node('h3','',title));
    const desc=value(row,'descricao','resumo','description','texto');
    if(desc) body.append(node('p','',desc));
    const tags=value(row,'etiquetas','tecnologias','tags','ferramentas','tech');
    if(tags){ const t=node('div','tech'); tags.split(/[,;|]/).map(s=>s.trim()).filter(Boolean).forEach(s=>t.append(node('span','',s)));body.append(t); }
    const href=validUrl(value(row,'link_url','projeto_url','link_afiliado','url','link','projeto_link','url_projeto','demo_url','repositorio_url','github_url','destino_url','site_url'));
    if(href){const a=node('a','cardlink',indication?'Ver indicação ↗':'Ver projeto ↗');a.href=href;a.target='_blank';a.rel=indication?'noopener noreferrer sponsored':'noopener noreferrer';body.append(a);}
    card.append(body);if(href){card.style.cursor='pointer';card.tabIndex=0;card.setAttribute('role','link');card.setAttribute('aria-label','Abrir '+title);card.addEventListener('click',e=>{if(!e.target.closest('a'))window.open(href,'_blank','noopener,noreferrer')});card.addEventListener('keydown',e=>{if(e.target===card&&(e.key==='Enter'||e.key===' ')){e.preventDefault();window.open(href,'_blank','noopener,noreferrer')}});}return card;
  }
  async function render(name,selector,area,indication=false){
    const grid=document.querySelector(selector); if(!grid) return;
    
    const version=(requestVersions.get(selector)||0)+1;
    requestVersions.set(selector,version);
    const status=node('p','micro','Carregando registros da planilha…');grid.replaceChildren(status);
    try{
      const rows=(await loadSheet(name)).filter(r=>published(r)&&(!area||normalize(value(r,'area'))===area)).sort((a,b)=>(Number(value(a,'ordem'))||9999)-(Number(value(b,'ordem'))||9999));
      if(requestVersions.get(selector)!==version) return;
      const cards=rows.map(r=>card(r,indication)).filter(Boolean);
      if(cards.length) grid.replaceChildren(...cards);
      else grid.replaceChildren(node('p','micro','Nenhum registro publicado nesta seção.'));
    }catch(e){
      console.warn('Portfolio V4: erro ao ler '+name,e);
      if(requestVersions.get(selector)!==version) return;
      grid.replaceChildren(node('p','micro','Não foi possível carregar os registros agora.'));
    }
  }
  if(document.querySelector('#indicacoes-grid')) render('Indicações','#indicacoes-grid',null,true);
  const pageArea=document.body.dataset.portfolioArea || 'dados';
  if(document.querySelector('#projetos')) render('Projetos','#projetos .grid',pageArea==='todos'?null:pageArea);
  document.querySelector('#filtros button[data-area="todos"]')?.setAttribute('aria-pressed','true');
  document.querySelectorAll('#filtros button').forEach(b=>b.addEventListener('click',()=>{
    const selected=b.dataset.area;
    document.querySelectorAll('#filtros button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
    render('Projetos','#projetos .grid',selected==='todos'?null:selected);
  }));
})();