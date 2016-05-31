# Open Threat Exchange Node API Client

![alt tag](https://i.imgur.com/I0USmqj.png)

## OTX-Node-SDK
Open Threat Exchange is an open community that allows participants to learn about the latest threats, research indicators of compromise observed in their environments, share threats they have identified, and automatically update their security infrastructure with the latest indicators to defend their environment.

OTX Direct Connect agents provide a way to automatically update your security infrastructure with pulses you have subscribed to from with Open Threat Exchange. By using Direct Connect, the indicators contained within the pulses you have subscribed to can be downloaded and made locally available for other applications such as Intrusion Detection Systems, Firewalls, and other security-focused applications.


## OTX DirectConnect Node SDK
OTX DirectConnect provides a mechanism to automatically pull indicators of compromise from the Open Threat Exchange portal into your environment.  The DirectConnect API provides access to all _Pulses_ that you have subscribed to in Open Threat Exchange (https://otx.alienvault.com).


## Installation and Usage
OTX-Node-SDK will soon be added to npm. Until then follow the instructions below:

1. Register at https://otx.alienvault.com/ and obtain your DirectConnect OTX Key found on https://otx.alienvault.com/api/
2. clone this repo
3. Require 'otx-node-sdk/index.js' in your file
``` 
var otxNodeSdk = require('otx-node-sdk/index.js'); 
```
4. Initialize with your OTX API KEY
``` 
var otxapi = new otxNodeSdk('<OTX_API_KEY>'); 
```
5. Have Fun!

### Usage Docs
All functions require a callback.


#### Indicators
Refer to https://otx.alienvault.com/api/ API Docs for parameter options and response examples.

- IPv4
``` otxapi.indicators.ipv4( ipv4, section, callback ); ```
-- *ipv4*: string *required*
-- *section*: string *required*
-- *callback*: function (error, response) *required*

- IPv6
``` otxapi.indicators.ipv6( ipv6, section, callback ); ```
-- *ipv6*: string *required*
-- *section*: string *required*
-- *callback*: function (error, response) *required*

- Domain
``` otxapi.indicators.domain( domain, section, callback ); ```
-- *domain*: string *required*
-- *section*: string *required*
-- *callback*: function (error, response) *required*

- Hostname
``` otxapi.indicators.hostname( hostname, section, callback ); ```
-- *hostname*: string *required*
-- *section*: string *required*
-- *callback*: function (error, response) *required*

- File
``` otxapi.indicators.file( file, section, callback ); ```
-- *file*: string *required*
-- *section*: string *required*
-- *callback*: function (error, response) *required*

- URL
``` otxapi.indicators.url( url, section, callback ); ```
-- *url*: string *required*
-- *section*: string *required*
-- *callback*: function (error, response) *required*

- CVE
``` otxapi.indicators.cve( cve, section, callback ); ```
-- *cve*: string *required*
-- *section*: string *required*
-- *callback*: function (error, response) *required*


#### Pulses
Refer to https://otx.alienvault.com/api/ API Docs for parameter options and response examples.

- Activity
``` otxapi.pulses.activity( modified_since, limit, page, callback ); ```
-- *modified_since*: datetime *optional*
-- *limit*: number *optional*
-- *page*: number *optional*
-- *callback*: function (error, response) *required*

- Create
``` otxapi.pulses.create( pulse, callback ); ```
-- *pulse*: object (refer to https://otx.alienvault.com/api/) *required*
--- name (string, required) name for new pulse
--- description (string) a brief description of the pulse, the threat it addresses.
--- public (boolean, required) Public implies other users can see / subscribe to your pulse.
--- TLP (string) One of: 'white', 'green', 'amber', 'red'. Default is green. Amber and red pulses MUST be private.
--- indicators (list of objects) List of objects (dicts): {type: 'email', indicator: 'badguy@malware.com', description: ''}. Every object in the list must contain these three fields.
--- tags (list of strings) Tags to describe your pulse. i.e. malware, phishing, hacking.team,...
--- references (list of strings) External references to associate with this pulse
-- *callback*: function (error, response) *required*

- Details
``` otxapi.pulses.details( id, callback ); ```
-- *id*: string *required*
-- *callback*: function (error, response) *required*

- Events
``` otxapi.pulses.events( modified_since, limit, page, callback ); ```
-- *modified_since*: datetime *optional*
-- *limit*: number *optional*
-- *page*: number *optional*
-- *callback*: function (error, response) *required*

- Indicators
``` otxapi.pulses.indicators( id, limit, page, callback ); ```
-- *id*: string (pulse identifier) *required*
-- *limit*: number *optional*
-- *page*: number *optional*
-- *callback*: function (error, response) *required*

- Indicators Types
``` otxapi.pulses.indicatorsTypes( callback ); ```
-- *callback*: function (error, response) *required*

- Indicators Validate
``` otxapi.pulses.indicatorsValidate( indicator, type, description, callback ); ```
-- *indicator*: string *required*
-- *type*: string *required*
-- *description*: string *optional*
-- *callback*: function (error, response) *required*

- Related
``` otxapi.pulses.related( id, callback ); ```
-- *id*: string *required*
-- *callback*: function (error, response) *required*

- Subscribed
``` otxapi.pulses.subscribed( modified_since, limit, page, callback ); ```
-- *modified_since*: datetime *optional*
-- *limit*: number *optional*
-- *page*: number *optional*
-- *callback*: function (error, response) *required*

- User
``` otxapi.pulses.user( username, callback ); ```
-- *username*: string *required*
-- *callback*: function (error, response) *required*


#### Search
Refer to https://otx.alienvault.com/api/ API Docs for parameter options and response examples.

- Pulses
``` otxapi.search.pulses(query, limit, page, callback ); ```
-- *query*: string *required*
-- *limit*: string *optional*
-- *page*: string *optional*
-- *callback*: function (error, response) *required*

- Users
``` otxapi.search.users(query, limit, page, callback ); ```
-- *query*: string *required*
-- *limit*: string *optional*
-- *page*: string *optional*
-- *callback*: function (error, response) *required*


#### Users
Refer to https://otx.alienvault.com/api/ API Docs for parameter options and response examples.

- Me
``` otxapi.users.me( callback ); ```
-- *callback*: function (error, response) *required*

- Action
``` otxapi.users.action( username, callback ); ```
-- *username*: string *required*
-- *callback*: function (error, response) *required*

- Follow
``` otxapi.users.follow( username, callback ); ```
-- *username*: string *required*
-- *callback*: function (error, response) *required*

- Unfollow
``` otxapi.users.unfollow( username, callback ); ```
-- *username*: string *required*
-- *callback*: function (error, response) *required*

- Subscribe
``` otxapi.users.subscribe( username, callback ); ```
-- *username*: string *required*
-- *callback*: function (error, response) *required*

- Unsubscribe
``` otxapi.users.unsubscribe( username, callback ); ```
-- *username*: string *required*
-- *callback*: function (error, response) *required*
