# 2020.goldsmiths.tech

> Website for the Goldsmiths Tech Society

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

## Setting up redirects

Redirects are handled in the `/static/_redirects` file

## Adding Events

1. Add it in `store/index.js` to add it to `/events`
2. Create a new .vue file in `/pages/events` and follow comments in the doc.vue template file

### Change event in home block

In the `store/index.js` file, make sure the desired event has `onHome` set to `true`. 

If the event is in the past, it will revert to a generic events message. If there are multiple events, we will count only the first in the list.

Please make sure there is always at least one event with this property set to true.

## Adding event types

1. In the `store/index.js` file, make sure you start using a new 'type'.
2. In the `pages/events/index.vue` gile, include a new entry in the `events()` computed property, with the parameter being the type name you use in the store. 
3. Add a new `<EventsType />` component and pass in the new entry from the computed property.
