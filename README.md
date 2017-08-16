# eslint-plugin-no-link-component

This ESLint rule checks your JSX for <Link /> components and outputs an error if it finds one. This will be useful if your team uses a wrapped version of React Router's Link component.

[This](https://zach.codes/handling-client-side-app-updates-with-service-workers/) is an example of using a wrapped Link component to handle app updates when a service worker is installed.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-link-component`:

```
$ npm install eslint-plugin-no-link-component --save-dev
```

**Note:** If you installed ESLint globally, you must also install `eslint-plugin-no-link-component` globally.

## Usage

Add `no-link-component` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-link-component"
    ]
}
```

Then add `no-link-component`'s only rule under the rules section.

```json
{
    "rules": {
        "no-link-component/no-link-component": "error"
    }
}
```

## Rule Details

This rule outputs an error to prevent usage of React Router's Link component (or any component named Link) throughout your app because you're using a wrapped/custom version of it.

The following patterns are considered warnings:

```js
<Link to={`/users/${user.id}`} activeClassName="active">{user.name}</Link>
```

The following patterns are not warnings:

```js
<CustomLink to={`/users/${user.id}`} activeClassName="active">{user.name}</CustomLink>
<UpdateLink to={`/users/${user.id}`} activeClassName="active">{user.name}</UpdateLink>
```

Note that you'll want to disable the rule in your CustomLink/UpdateLink definition:

```js
/* eslint-disable no-link-component/no-link-component */
or
// eslint-disable-line no-link-component/no-link-component
```
