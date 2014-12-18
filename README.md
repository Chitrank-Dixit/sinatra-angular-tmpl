# Sinatra / AngularJS App Skeleton

## Introduction
This is a skeleton for an app written in Sinatra with AngularJS as the
front-end framework.

The structure was inspired by:

1. Style Guide by Minko Gechev in https://github.com/mgechev/angularjs-style-guide

2. Best Practice Recommendations on https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/mobilebasic?pli=1

When I was learning AngularJS I used those two resources to understand how to best structure my app. The result
was something that suited my very specific needs of using both Sinatra and AngularJS.

## Structure:
**app.rb:** The main Sinatra Application

**/config:** Configuration YAML files

**/helpers:** Helper classes

**/views:** ERB files used by Sinatra

**/public/bower_components:** Bower components

**/public/images:** Image files

**/public/styles:** CSS files

**/public/partials:** AngularJS Partial Templates. A sub-directory is created per AngularJS controller.

**/public/scripts/app.js:** The AngularJS application.

**/public/scripts/controllers:** Directory of AngularJS controllers.

**/public/scripts/services:** Directory of AngularJS services.

## apiroots.erb
The purpose of apiroots.erb is for Sinatra to render an AngularJS service that could
return the base URLs for remote APIs that the app needs to talk to. These base URLs could
be read from a config.yml.

As can be seen in /public/services/accountsApi.js, it can be used like this:

```javascript
var doLogin = function(emailAddr, password, remember) {
  return $http({
      method: 'POST',
      url: apiRoots.sampleRempteApi() + '/accounts/login',
      data: { emailAddr: emailAddr, password: password, remember: remember },
      headers: {'Content-Type': 'application/json'}
  });
};
```
In the accounts.erb file, it's inserted in the HTML <head> like this:

```ruby
<%= erb :apiroots %>
```

## Bower
This skeleton app has the basic bower dependencies:

```javascript
"dependencies": {
    "angular-bootstrap": "~0.11.2",
    "angular": "1.3.0",
    "angular-route": "~1.2.x",
    "bootstrap": "3.2.0"
 }
```

