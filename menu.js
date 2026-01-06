// Prince of Persia: The Two Thrones Main Menu TypeScript
// Handles menu item interactivity and fade-in animations

document.addEventListener('DOMContentLoaded', () => {
    // Soundtrack logic
    const mainMenuAudio = document.getElementById('main-menu-audio');
    const logo = document.querySelector('.logo');
    if (logo && mainMenuAudio) {
      logo.addEventListener('click', () => {
        if (mainMenuAudio.paused) {
          mainMenuAudio.currentTime = 0;
          mainMenuAudio.play();
        }
      });
    }
  const menuItems = Array.from(document.querySelectorAll('.menu-item'));
  menuItems.forEach((item, i) => {
    setTimeout(() => {
      item.style.opacity = '1';
      // Removed transform override to allow CSS hover scale
    }, 400 + i * 180);
  });

  menuItems.forEach(item => {
    if (!item.classList.contains('disabled')) {
      item.addEventListener('mouseenter', () => {
        item.classList.add('hovered');
      });
      item.addEventListener('mouseleave', () => {
        item.classList.remove('hovered');
        item.classList.remove('pressed');
      });
      item.addEventListener('mousedown', () => {
        item.classList.add('pressed');
      });
      item.addEventListener('mouseup', () => {
        item.classList.remove('pressed');
      });
    }
  });

  // Fade out everything and show loading screen on Start New Game
  const startGame = document.getElementById('start-game');
  if (startGame) {
        startGame.addEventListener('click', () => {
          // Stop soundtrack
          if (mainMenuAudio) {
            mainMenuAudio.pause();
            mainMenuAudio.currentTime = 0;
          }
          // Fade out all main elements
          const videoBg = document.querySelector('.video-bg');
          const logo = document.querySelector('.logo');
          const menuContainer = document.querySelector('.menu-container');
          if (videoBg) {
            videoBg.style.transition = 'opacity 0.7s';
            videoBg.style.opacity = '0';
          }
          if (logo) {
            logo.style.transition = 'opacity 0.7s';
            logo.style.opacity = '0';
          }
          if (menuContainer) {
            menuContainer.style.transition = 'opacity 0.7s';
            menuContainer.style.opacity = '0';
          }
          setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) loadingScreen.style.display = 'block';
          }, 700);
        });
    startGame.addEventListener('click', () => {
      // Fade out all main elements
      const videoBg = document.querySelector('.video-bg');
      const logo = document.querySelector('.logo');
      const menuContainer = document.querySelector('.menu-container');
      if (videoBg) {
        videoBg.style.transition = 'opacity 0.7s';
        videoBg.style.opacity = '0';
      }
      if (logo) {
        logo.style.transition = 'opacity 0.7s';
        logo.style.opacity = '0';
      }
      if (menuContainer) {
        menuContainer.style.transition = 'opacity 0.7s';
        menuContainer.style.opacity = '0';
      }
      setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) loadingScreen.style.display = 'block';
      }, 700);
    });
  }
});
