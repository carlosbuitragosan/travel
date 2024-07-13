document.addEventListener("DOMContentLoaded", function() {
  const heading = document.querySelector('.hero__title');

  console.log('helloWorld!')

  function breakHeading(isScreenSmall) {
      if (isScreenSmall) {
          heading.innerHTML = 'We are <em>literally<br></em> the best airline <br>out there.';
          console.log('Screen is now smaller.');
      } else {
          heading.innerHTML = 'We are <em>literally</em> the best airline out there.';
          console.log('Screen is now larger.');
      }
  }

  function handleMediaQuery(event) {
      breakHeading(event.matches);
  }

  const mediaQuery = window.matchMedia('(max-width: 780px)');
  mediaQuery.addEventListener('change', handleMediaQuery);

  handleMediaQuery(mediaQuery);
});
