# MakeMyStay

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
MakeMyStay is an online portal where host can list their properties and guests can browse them.

## Steps to install
```
clone this repo
npm install
npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Project structure (src folder)
```
src
|
|- components (UI components)
|- config
|- data (mock data used only via dummy API. No UI component is directly reading data from here)
|- routes (UI routes and configuration lies here)
|-service (business logic along with dummy API call lies here)
|- store (redux related state management logic lies here)
|- utils (utilities)
```

### Features
:heavy_check_mark: Login/Logout feature for Guest and Host

:heavy_check_mark: Authenticated Routes

:heavy_check_mark: Property List View where Guest can see all listed properties while Host can see properties list by him/her.

:heavy_check_mark: Property View with static details of any property

:heavy_check_mark: Option to book a property (only Guest can book a property)

:heavy_check_mark: Booking form for requesting new booking (Managed through localstorage)

:heavy_check_mark: Manage Booking Requests feature for Host (Bell Icon on top left in Host login view)

:heavy_check_mark: Host can Approve/Reject Booking Request

### Pending items due to limited time
:x: Payment and Refund feautre on rejection of booking

:x: Complete code coverage (unit testing)

:x: Response designs

:x: Form validations

## Asssumptions -
* All mock data (inside src >> data) is based on asssumptions
* Since, signup feature is not ready, two pre-registered (assumed) users that can be used are as follows
    * ```
        GUEST ->
        Username - John 
        Password - _Any string_ (no password validations are done yet)
    
        HOST ->
        Username - David
        Password - _Any string_ (no password validations are done yet)
    ```
* Guest can see all properties listed in DB while Host can see only properties listed by him/her.
* Host can not book any property. (He/She needs a guest account to book any property)
* No Restrictions applied on Check In and Check Out Dates


