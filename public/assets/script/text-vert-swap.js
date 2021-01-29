window.addEventListener("load", function() {
    setTimeout(function() {
    var tVSes = document.querySelectorAll(".text-vert-swap");
    
    
    for(var i = 0; i < tVSes.length; i++) {
        let tVS = tVSes[i];
        let terms = Array.from(tVS.children).map(function(x) { return x.textContent; });
        
        let initialBox = tVS.getBoundingClientRect();
        
        //pin width and height
        tVS.style.width = initialBox.width + "px";
        tVS.style.height = initialBox.height + "px";
        
        //overflow is hidden at first to prevent flash of unstyled options. Disable that so the opacity transitions look nice
        tVS.style.overflow = "visible";
        
        clearToTwoChild(tVS);
        
        tVS.children[0].style.position = 
            tVS.children[1].style.position = 
            "absolute";
        
        let initial, lastTerm = -1, duration = 5000, direction = 1, slideTime = 0.8;
        requestAnimationFrame(function anim(time) {
            if(!initial) initial = time;
            let elapsed = time - initial;
            
            let animElapsed = (elapsed % duration)/duration;
            let termsElapsed = animElapsed*terms.length;
            
            let term = Math.floor(termsElapsed);
            let termAnimElapsed = termsElapsed - term;
            
            //half is just a static state
            if(termAnimElapsed < slideTime) termAnimElapsed = 0;
            else termAnimElapsed = (termAnimElapsed - slideTime) * (1/(1-slideTime));
            
            if(term != lastTerm) {
                lastTerm = term;
                direction = (Math.random()-0.5>0)?-1:1;
                
                tVS.children[0].textContent = terms[term];
                tVS.children[1].textContent = terms[ terms.length == term + 1 ? 0 : term + 1 ];
            }
            
            tVS.children[0].style.transform = `translateY(${direction*termAnimElapsed*initialBox.height}px)`;
            tVS.children[0].style.opacity = 1 - getOpacity(termAnimElapsed);
            
            tVS.children[1].style.opacity = getOpacity(termAnimElapsed);
            tVS.children[1].style.transform = `translateY(${-direction*(1-termAnimElapsed)*initialBox.height}px)`;
            
            requestAnimationFrame(anim); 
        });
    }
    
    function getOpacity(animPercent) {
        return (animPercent*animPercent);
    }
}, 200);
})