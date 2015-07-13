##sketch of app.js 0.1

1. Initiate app
2. Make request to PetaJakarta.org
  - show loading screen
  - add animation
  - show error if no data received/or error
    - "Error downloading data, please try again later"
3. Display card with total number of reports:
  - "0 Flood Reports since 08:30 \n
   Visit PetaJakarta.org for more"
   - user's local time - 1 hour.
4. Card with icon image.

### Tests
- check catching of error with ajax request
- else check creation of proper display string w/ number of reports
- check time to display/timezone?
