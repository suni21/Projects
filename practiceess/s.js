function createParticle (x, y) {
      var size = Math.random() * 50 + 10;
      
      x -= (size / 2);
      y -= (size / 2);
      
      var particle = document.createElement('div');
      document.body.appendChild(particle);
      
      TweenMax.set(particle, {
        x: x, 
        y: y,
        width: size,
        height: size,
        background: function () {
          return `hsl(${Math.random() *90+200}, 50%, 50%)`
        }
      });
      TweenMax.to(particle, Math.random() * 2 + 1, {
        x: x + (Math.random() - 0.5) * 200,
        y: y + (Math.random() - 0.5) * 200,
        opacity: 0,
        scale:0,
        ease: Power2.easeOut,
        onComplete: function () {
          document.body.removeChild(particle);
        }
      })
    }
    
    function render (a) {
      var noiseX = (noise.simplex3(2, 0, a*0.0005) + 1) / 2;
      var noiseY = (noise.simplex3(10, 0, a*0.0005) + 1) / 2;
      var x = noiseX * innerWidth;
      var y = noiseY * innerHeight;
      createParticle(x, y);
      requestAnimationFrame(render);
    }
    
    requestAnimationFrame(render);