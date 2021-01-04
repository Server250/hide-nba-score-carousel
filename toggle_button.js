let gameWrapper, scoreCarousel, scoreCarouselContent, toggleButton
let carousel_hidden = false;

// Alter the styles of the page so the carousel is hidden
hide_carousel = () => {

    // Hide the scores/games
    scoreCarouselContent.style.display = "none";

    // Move the content of the page up to account for smaller header
    gameWrapper.style.paddingTop = "2rem";

    carousel_hidden = true;

}

// Alter the styles of the page so the carousel is shown
show_carousel = () => {

    // Show the scores/games
    scoreCarouselContent.style.display = "block";

    // Move the content of the page down to account for larger header
    gameWrapper.style.paddingTop = "8rem";

    carousel_hidden = false;

}

// Alternate between carousel states
toggle_carousel = () => {

    if (carousel_hidden === true) 
    {
        show_carousel();
    }
    else
    {
        hide_carousel();
    }

}

// Initialise the button itself and fetch needed page elements
initialise_button = () => {

    // Hide the advert at the top of the page
    let topAd = document.getElementById("companion_above_player");
    topAd.remove();

    // Get the elements that need to be restyled from the page
    gameWrapper = document.getElementsByClassName("Layout_withScores__1G_Ex")[0];
    scoreCarousel = document.getElementsByClassName("Scoreboard_content__2hMP-")[0];
    scoreCarouselContent = scoreCarousel.getElementsByClassName("Scoreboard_inner__hjyAw")[0];

    // Create the toggle button
    toggleButton = document.createElement("a");
    toggleButton.innerText = "Scores";
    // CSS styling done inline as it is wasteful to include a CSS file for one element
    toggleButton.style.cssText = "display:block;height:1.6rem;width:100%;line-height:1rem;padding:0.3rem 0;margin:0;text-decoration:none;text-align:center;user-select:none;";
    // Add the event listener for toggling states
    toggleButton.addEventListener("click", toggle_carousel)
    // Insert the button after the score carousel content
    scoreCarousel.insertBefore(toggleButton, scoreCarouselContent.nextSibling);

    //hide_carousel();

}

// If document has loaded, initialise button
if (document.readyState === "complete") 
{
    initialise_button();
}
else // Otherwise defer this until the page has fully loaded
{
    // Timeout method used as often the scoreboard and advert are loaded late
    window.onload = () => { setTimeout(initialise_button,0); }
}
