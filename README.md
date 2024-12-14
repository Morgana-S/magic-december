# Magic December - A Showcase of Festivals, Holidays and Celebrations from around the world
<!-- Add image of responsive design showcase here -->
## Deployment
The project is deployed and can be accessed at: https://jamie-gargrave.github.io/magic-calendar/
## Criteria
### The project fits the theme of celebrating the holidays.
- Our project is focused on not only celebrating Christmas, but the variety of holidays and festivals that are celebrated around the world. With each day on the calendar, we have tried to provide a relevant celebration that occurs on that day; however, we have also chosen several major celebrations that occur at different times of the year. While Christmas is the main holiday that people are thinking about right now, there's no reason not to maintain that festive spirit throughout the year. 
### The project is well planned and executed (Using GitHub Projects/Kanban)
- Project management was carried out through GitHub Projects, the issues page, and Slack. Regular huddles were carried out on slack to ensure that people were happy with their responsibilities and that there weren't any blockers in the way of progress. We deployed to GitHub pages early to allow us to view the website in a deployed version for the purposes of testing and feedback.
### The project has a basic README that follows the provided template.
- The README file was constructed early in the project and updated with features, credit and information regularly to ensure it kept pace with the project. 

### The project has an overall sense of completeness.
- We focused on getting a version of the site deployed early, using GitHub Projects to prioritise essential work and issues. After we had the foundation of the site down, we then proceeded to work on polishing existing functionality.

### The project showcases a strong sense of creativity and originality.
- We believe that our project derives its purpose from the true core of the holiday period - a sense of inclusivity, festivity and togetherness. We took information provided by websites that specialise in the subject matter, formatted the content in a way that makes it accessible and exciting the end-user to view, and we gave the user the ability to find out more information if they desire. We strongly feel this kindles the thirst for knowledge and understanding of other cultures and ways of celebrating the festive period in an original way.

## About
Magic December is a festive, advent-style calendar with selectable cards. 
The purpose of the calendar is to provide insight into many of the widely celebrated seasonal festivals and holidays around the world. 
Our project is unique as it uses the motif of a local holiday tradition (advent calendars) to provide content to the user - the nature of the advent calendar format allows for new content to be provided every day.

## Goal
### Problem Statement:
**At this time of year, everyone is thinking about celebrating the festive period - but we don't actually know much about how the world celebrates. Our project aims to provide insight into the many kinds of festivals and holiday celebrations that occur around the world.**

### Objectives:
- To create a website which allows the user to learn more about different festival celebrations around the world.
- The website should be fun, enticing, and allow the user to find out more on holidays and festivals they're interested in.
- The website should be colorful to reflect the festive theme.

### Target Audience:
- Users looking to find out more about how festivals are celebrated around the world.
- Users looking for an interactive and fun way to learn about other cultures.

### Benefits:
- Users have a centralised location to find out about the various celebrations that are taking place at this time of year.
- The information provided is comprehensive, but we also allow users to go ahead and find out more information for themselves. 

## UI/UX Design
The wireframes for the website's design can be found [here.](/documentation/wireframes/magic-calendar.pdf)
The wireframes for this project are very rudimentary and designed to give us a foundational idea on how to structure the website. 
Early in the project, the team decided to use Bootstrap as a framework for the site's design. 
This allowed the use of the in-built class templates to provide a mobile-first, responsively designed site. 

The website was designed as a celebration of festivals and holidays around the world - however, given the timing of the project as being incepted close to  Christmas, we decided to use Christmas-y colours such as red, green and off-white for our design.
These colours evoke imagery of the holiday season (particularly of Santa Claus and elves) and are designed to remind the user of the purpose of the site.

While the wireframes themselves were rudimentary, regular discussion was had between the team members on the appearance of the site via Slack; the overall appearance of the website was a collaborative effort with the wireframes being designed by Morgana and Anna contributing assets for the design of the cards using Canva and Adobe Firefly.
## User Stories
**First Time Visitors:**
- As a first time visitor, I want to be able to clearly understand the purpose of the site.
- As a first time visitor, I want the site content to prioritise readability in terms of fonts and colours.
- As a first time visitor, I want the site content to be responsive, allowing me to access the site on a variety of devices, such as a phone, tablet, or laptop.

**Frequent Visitors:**
- As a frequent visitor, I want the site to have new content available to me each day.
- As a frequent visitor, I want to be able to find out more information on each festival after reading the site's content.

## Testing & Bugs

### Bugs
- Tooltip does not show 'This day is not clickable' on inactive days. 
    - Cause: This is caused by the 'disabled' class having a 'pointer-events: none' property, which causes the tooltip not to fire.
    - Fix: Remove the 'pointer events: none' property from the 'disabled' class. The 'cursor: not-allowed' property can remain to indicate to the user that the button is not clickable.

## Credits

### Content
- [National Today](https://nationaltoday.com/) - Information on holidays and festivals
- [Days of the Year](https://www.daysoftheyear.com/) - Further information on holidays and festivals for content
- [Pixabay](https://pixabay.com/) - Cover image
- [SVGRepo](https://www.svgrepo.com/) - Icons and vectors for project page
- [Lexica](https://lexica.art/) - Image assets for project
- [D23](https://d23.com/about-walt-disney/) - Image asset for Walt Disney Day
- [Greaves Travel India](https://www.greavesindia.co.uk/these-are-the-most-beautiful-sights-in-bhutan/) - Image for Bhutan Day
- [Wikipedia: Flag of Bhutan](https://en.wikipedia.org/wiki/Flag_of_Bhutan#/media/File:Flag_of_Bhutan.svg) - Image for Bhutan Flag
- [ThoughtCo & National Archive and Records Administration](https://www.thoughtco.com/germans-to-america-1421984) - Image of German Migrants for Migrant Day
- [Emojipedia](https://emojipedia.org/) - Assets for reverse of cards

### Libraries, Tools and Frameworks

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Page structure and content.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Page appearance and styling rules.
- [Bootstrap Framework](https://getbootstrap.com/docs/5.3/getting-started/introduction/) - Framework for CSS and JavaScript templates.
- [Bootstrap Grid](https://getbootstrap.com/docs/5.3/layout/grid/#example) - Layout for the advent calendar cards.
- [Bootstrap Cards](https://getbootstrap.com/docs/5.3/components/card/#about) - Advent calendar content boxes.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) -  Page interactivity and functionality.
- [Visual Studio Code Desktop](https://code.visualstudio.com/) - IDE used for project development.
- [Git](https://git-scm.com/) - Version control
- [GitHub Desktop](https://desktop.github.com/download/) - Additional version control.
- [GitHub](https://github.com/) - Project repo hosting.
- [GitHub Issues](https://github.com/features/issues) - Project management, issue reporting.
- [GitHub Pages](https://pages.github.com/) - Project deployment.
- [Perplexity AI](https://www.perplexity.ai/) - Assistance with content formatting
- [Canva](https://www.canva.com/en_gb/) - Creation of the numbers for each calendar card.
- [RemoveBG](https://www.remove.bg/) - Removing the background from some images.
- [Adobe Firefly](https://www.adobe.com/uk/products/firefly.html) - Generative AI Assets for numbers on each card.

### Contributors
#### Team - The Ho Ho Homies:
- Jamie Gargrave - https://github.com/Jamie-Gargrave
- Linus Johansson - https://github.com/j0hanz
- Tamanna Islam - https://github.com/farhatamannaislam
- Anna Sahaidachna - https://github.com/Anka-S
- Gregory Stary - https://github.com/GrzegorzStary
- Morgana Stone - https://github.com/Morgana-S/