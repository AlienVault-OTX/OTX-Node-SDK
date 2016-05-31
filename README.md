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


#### Indicators

- IPv4
``` otxapi.indicators.ipv4( ipv4, section, callback ); ```

- IPv6
``` otxapi.indicators.ipv6( ipv6, section, callback ); ```

- Domain
``` otxapi.indicators.domain( domain, section, callback ); ```

- Hostname
``` otxapi.indicators.hostname( hostname, section, callback ); ```

- File
``` otxapi.indicators.file( file, section, callback ); ```

- URL
``` otxapi.indicators.url( url, section, callback ); ```

- CVE
``` otxapi.indicators.cve( cve, section, callback ); ```


#### Pulses

- Activity
``` otxapi.pulses.activity( ```

- Create
``` otxapi.pulses.create( ```

- Details
``` otxapi.pulses.details( ```

- Events
``` otxapi.pulses.events( ```

- Indicators
``` otxapi.pulses.( ```

- Indicators Types
``` otxapi.pulses.indicatorsTypes( ```

- Indicators Validate
``` otxapi.pulses.indicatorsValidate( ```

- Related
``` otxapi.pulses.related( ```

- Subscribed
``` otxapi.pulses.subscribed( ```

- User
``` otxapi.pulses.user( ```


#### Search

- Pulses
``` otxapi.search.pulses(query, li mit, page, callback ); ```

- Users
``` otxapi.search.users(query, lim it, page, callback ); ```


#### Users

- Me
``` otxapi.users.me( callback ); ```

- Action
``` otxapi.users.action( username, callback ); ```

- Follow
``` otxapi.users.follow( username, callback ); ```

- Unfollow
``` otxapi.users.unfollow( username, callback ); ```

- Subscribe
``` otxapi.users.subscribe( username, callback ); ```

- Unsubscribe
``` otxapi.users.unsubscribe( username, callback ); ```
