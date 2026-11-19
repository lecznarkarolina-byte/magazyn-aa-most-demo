(function(){
 'use strict';
 let installPrompt=null;
 const button=document.getElementById('installMost');
 const message=document.getElementById('installMostMessage');
 const standalone=()=>window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;
 function installed(){installPrompt=null;button.hidden=true;message.textContent='Magazyn jest uruchomiony jako aplikacja.';}
 if(standalone())installed();
 window.addEventListener('beforeinstallprompt',event=>{
  event.preventDefault();installPrompt=event;if(!standalone())button.hidden=false;
 });
 window.addEventListener('appinstalled',installed);
 button.addEventListener('click',async()=>{
  if(!installPrompt)return;
  button.disabled=true;
  const prompt=installPrompt;installPrompt=null;
  try{await prompt.prompt();const choice=await prompt.userChoice;
   message.textContent=choice.outcome==='accepted'?'Zatwierdzono instalację. Ikona pojawi się na telefonie.':'Instalację anulowano. Możesz wrócić do niej przez menu przeglądarki.';
  }catch(error){message.textContent='Otwórz menu przeglądarki i wybierz instalację aplikacji.';}
  finally{button.hidden=!installPrompt;button.disabled=false;}
 });
 if('serviceWorker' in navigator){
  window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js',{updateViaCache:'none'}).catch(error=>console.warn('Nie udało się przygotować instalacji MOST:',error)));
 }
})();

