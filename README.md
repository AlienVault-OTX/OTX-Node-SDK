# OTX-Node-SDK
Open Threat Exchange is an open community that allows participants to learn about the latest threats, research indicators of compromise observed in their environments, share threats they have identified, and automatically update their security infrastructure with the latest indicators to defend their environment.

OTX Direct Connect agents provide a way to automatically update your security infrastructure with pulses you have subscribed to from with Open Threat Exchange. By using Direct Connect, the indicators contained within the pulses you have subscribed to can be downloaded and made locally available for other applications such as Intrusion Detection Systems, Firewalls, and other security-focused applications.


# OTX DirectConnect Node SDK


OTX DirectConnect provides a mechanism to automatically pull indicators of compromise from the Open Threat Exchange portal into your environment.  The DirectConnect API provides access to all _Pulses_ that you have subscribed to in Open Threat Exchange (https://otx.alienvault.com).


## Installation and Usage
OTX-Node-SDK will soon be added to npm. Until then follow the instructions below:

1. Register at https://otx.alienvault.com/ and obtain your DirectConnect OTX Key found on https://otx.alienvault.com/api/
2. clone this repo
3. Require 'otx-node-sdk/index.js' in your file
``` var otxNodeSdk = require('otx-node-sdk/index.js'); ```
4. Initialize with your OTX API KEY
``` var otxapi = new otxNodeSdk('<OTX_API_KEY>'); ```
5. Have Fun!

### Usage Docs
All functions require a callback.

#### Search
Search module includes searching: Pulses and Users.
##### Pulses
``` otxapi.search.pulses(query, limit, page, callback ); ```

Name  | Type | Required | Description
------------- | -------------
query  | string | Yes | search query
limit  | number | No | limit number per page
page  | number | No | current page number
callback  | function | Yes | Callback function with params error and response: `callback(error, response)`

##### Users
``` otxapi.search.users(query, limit, page, callback ); ```

Name  | Type | Required | Description
------------- | -------------
query  | string | Yes | search query
limit  | number | No | limit number per page
page  | number | No | current page number
callback  | function | Yes | Callback function with params error and response: `callback(error, response)`
