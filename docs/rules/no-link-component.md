# Checks your JSX for <Link /> components and outputs an error if it finds one

This ESLint rule checks your JSX for <Link /> components and outputs an error if it finds one. This will be useful if your team uses a wrapped version of React Router's Link component.

[This](https://zach.codes/handling-client-side-app-updates-with-service-workers/) is an example of using a wrapped Link component to handle app updates when a service worker is installed.

## Rule Details

This rule outputs an error if you want to prevent usage of React Router's Link component throughout your app because you're using a wrapped/custom version of it.

The following patterns are considered warnings:

```js
<Link to={`/users/${user.id}`} activeClassName="active">{user.name}</Link>
```

The following patterns are not warnings:

```js
<CustomLink to={`/users/${user.id}`} activeClassName="active">{user.name}</CustomLink>
<UpdateLink to={`/users/${user.id}`} activeClassName="active">{user.name}</UpdateLink>
```
