function zoek() {
    let zoeken = prompt();
    if (zoeken === "") {
        window.alert("Ja, dan niet he");
    }
    else {
        window.alert("Letsa go, "+zoeken);
        window.open('https://www.mouser.be/c/?q='+zoeken, '_blank');
        fetch('https://api.mouser.com/api/v1/search/keyword?apiKey=02228225-5c4c-4e06-a784-17d2fd4c5ae5', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        // body: '{  "SearchByKeywordRequest": {    "keyword": "TL074",    "records": 0,    "startingRecord": 0,    "searchOptions": "string",    "searchWithYourSignUpLanguage": "string"  }}',
        body: JSON.stringify({
            'SearchByKeywordRequest': {
            'keyword': zoeken,
            'records': 0,
            'startingRecord': 0,
            'searchOptions': 'string',
            'searchWithYourSignUpLanguage': 'string'
            }
        })
        });
        window.alert("Dat de API-resultaten hier niet verschijnen komt door een onvoorzien probleem (pinte kan absoluut geen javascript).")
        window.alert("Onze excuses voor het ongemak.")
    }
}

