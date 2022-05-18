#### I used React, React-Router, Redux, TypeScript.

The application consists of several pages: Main (/), Sign In (/login), Favorites (/favorites) (private), Room (/offer/:id).
The Favorites page is only available to authorized users.

#### About the project

Six Cities is a service for travelers who do not want to overpay for rent. 
Choose from six popular travel destinations and get an up-to-date list of rental offers. 
Detailed information about housing, showing the object on the map, as well as a concise service interface will help you quickly choose the best offer.

If the user is authorized, then when they go to the "Sign In" page, they are redirected to the main page.
If the user is not authorized, then when trying to navigate to a private page, a redirect to the "Sign In" page (/login) is performed.

The header of each page displays a link to the "Sign In" page (if the user is not authorized) or the user's email and the "Sign Out" button (if the user is authorized).

Clicking on the “Sign Out” button leads to the end of the session - exit from the closed part of the application.
Clicking on the user's email in the header takes you to the "Favorites" (/favorites) page.

#### 404 Page

Accessing a non-existent page (for example, through the address bar) does not lead to errors in the application, but is correctly processed by routing. 
The user is redirected to a 404 page. 

#### Main Page

The main page displays a list of cities for which it is possible to request rental offers: Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf.
After downloading the application, the first city from the list on the main page is always active immediately - Paris. 
Rental offers for this city are loaded.
On the map, offers are displayed as blue markers. 
Clicking on the "Favorites" button adds the card to your favorites. 
A second click on the "Favorites" button performs the opposite action - removes from favorites. 
If the user is not authorized, then a redirect to the "Sign In" page is performed. 
The icon on the button changes depending on the action: add to favorites (transparent), remove from favorites (blue).
The user can change the sorting of the offer list.
Clicking on the title of the card takes you to a page with detailed information about the offer.
If there are no offers, the list displays "No places to stay available" and a static image is displayed instead of a map.
All offers of the selected city are displayed on the map as blue markers.
When you hover over an offer card, the marker corresponding to the ad turns orange. 
The item is valid only for the main page.

#### Room Page

For authorized users, a form for submitting a new review is displayed.
Under the list of reviews, a map is displayed with offers nearby. 
The map shows 3 nearby offers and a current offer marker (4 markers in total). Offer markers are highlighted in blue. 
The current offer marker is highlighted in orange. 

The feedback submission form is displayed only to authorized users.
The review text must contain between 50 and 300 characters.
Until the user selects a rating and enters a valid text length, the submit feedback button is disabled.
When you click the "Submit" button and send data, the "Submit" button and the entire form should be blocked. 
The form and button are unlocked when the submission is successful or when an error occurs.
If the feedback is successfully submitted, the form is cleared.

#### Sign In Page

To enter the service, the user enters a login (email) and password. Since the service does not have the ability to register, the login and password can be anything, but not empty.
A valid email address must be entered in the "login" field.
A valid password must be entered in the "password" field. A valid password is a password that consists of at least one letter and a number.
The page is accessible only to unauthorized users. Redirects authorized users to the main page.

#### Favorites

The "Favorites" page is available only to authorized users. If the user is not authorized, then a redirect to the "Sign In" page is performed.
The transition to the "Favorites" page is carried out by clicking on the email of an authorized user.
The "Favorites" page displays all the offers that the user has added to favorites. Offers are grouped by city.
If the user has not added any offer to favorites, then the page displays "Nothing yet saved".
On the "Favorites" page, the user can remove an offer from favorites. Deletion is carried out by clicking on the "Favorites" button.
After deleting an offer from favorites, the list of offers is updated (the deleted offer disappears).

If you want to, you can:

#### clone this project ('git clone [name of repository]'),

#### navigate into project's folder ('cd sixCities')

#### install dependencies ('npm i'),

#### and run the project with 'npm run start' script. 
