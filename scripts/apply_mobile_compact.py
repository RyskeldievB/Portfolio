from pathlib import Path

p = Path('index.html')
s = p.read_text(encoding='utf-8')
marker = '/* mobile-compact-v3 */'

if marker not in s:
    css = r'''
/* mobile-compact-v3 */
.mini-card strong,
.mini-card strong .counter{
  font-size:30px!important;
  line-height:1.05!important;
  font-weight:900!important;
  letter-spacing:-.7px!important;
}
.mini-card strong .counter{display:inline!important;color:inherit!important}

@media(max-width:720px){
  section{padding:12px 0 18px}
  .hero{padding:44px 0 24px}
  .hero-main,.hero-side{padding:18px}
  .hero h1{font-size:36px}
  .lead{font-size:16px}
  .actions{margin-top:20px}
  .btn{padding:11px 14px}

  .mini-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:10px;margin-top:18px}
  .mini-card{padding:14px;min-height:105px}
  .mini-card strong,.mini-card strong .counter{font-size:24px!important;white-space:nowrap}
  .mini-card span{font-size:12px;line-height:1.35}

  .section-head{margin-bottom:14px}
  .section-title{font-size:26px}
  .section-sub{font-size:14px}

  .skills-grid,.solve-grid{
    display:flex!important;
    overflow-x:auto;
    gap:12px;
    padding:2px 2px 12px;
    scroll-snap-type:x mandatory;
    -webkit-overflow-scrolling:touch;
    scrollbar-width:none;
  }
  .skills-grid::-webkit-scrollbar,.solve-grid::-webkit-scrollbar{display:none}
  .skills-grid>*,.solve-grid>*{flex:0 0 82%;scroll-snap-align:start}
  .skill,.solve-card{padding:18px!important;min-height:190px}
  .skill .icon{width:48px;height:48px;margin-bottom:14px}
  #skills .section-sub:after,#solutions .section-sub:after{content:'  •  Swipe cards →';color:var(--accent2);font-weight:700}

  #experience .item{padding:18px;cursor:pointer;position:relative}
  .item-top{gap:6px}
  .item h3{font-size:19px}
  #experience .item ul{max-height:0;overflow:hidden;opacity:0;margin:0;padding-left:18px;transition:max-height .35s ease,opacity .25s ease,margin .25s ease}
  #experience .item.mobile-open ul{max-height:520px;opacity:1;margin:12px 0 0}
  #experience .item:after{content:'View details +';display:block;margin-top:10px;color:var(--accent2);font-size:12px;font-weight:800}
  #experience .item.mobile-open:after{content:'Hide details −'}

  #case-study .case-card{max-height:185px;overflow:hidden;cursor:pointer;position:relative;transition:max-height .4s ease}
  #case-study .case-card.mobile-open{max-height:900px}
  #case-study .case-card:after{content:'Tap to expand +';position:absolute;left:20px;right:20px;bottom:12px;padding-top:28px;background:linear-gradient(transparent,#0b162a 48%);color:var(--accent2);font-size:12px;font-weight:800}
  #case-study .case-card.mobile-open:after{content:'Tap to collapse −';position:static;display:block;background:none;padding-top:10px}
  .case-grid{gap:12px}
  .mock-body{min-height:220px}

  .contact-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:10px}
  .contact-card{padding:14px}
  .contact-card strong{font-size:13px}
  .footer-box{font-size:12px}
}
'''
    s = s.replace('</style>', css + '\n</style>', 1)

    js = r'''
<script id="mobileCompactV3">
(function(){
  function setup(){
    if(!window.matchMedia('(max-width:720px)').matches) return;
    document.querySelectorAll('#experience .item').forEach(function(el){
      if(el.dataset.mobileBound) return;
      el.dataset.mobileBound='1';
      el.addEventListener('click',function(){el.classList.toggle('mobile-open')});
    });
    var c=document.querySelector('#case-study .case-card');
    if(c && !c.dataset.mobileBound){
      c.dataset.mobileBound='1';
      c.addEventListener('click',function(){c.classList.toggle('mobile-open')});
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',setup); else setup();
})();
</script>
'''
    s = s.replace('</body>', js + '\n</body>', 1)
    p.write_text(s, encoding='utf-8')
