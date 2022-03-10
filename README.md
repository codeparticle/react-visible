# react-visible

> A simple component to toggle visiblity and provide an optional fallback.

[![NPM](https://img.shields.io/npm/v/react-visible.svg)](https://www.npmjs.com/package/@codeparticle/react-visible) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @codeparticle/react-visible
```

## Usage

Note: Transitioning from v1 to v2 breaks the test snapshots.

Visible is easy to use. It has two required props, a condition `when` and a child component to render when that condition is true. It also supports the addition of a `fallback` prop if you'd like to show something else as a backup, such as a loader for a request that hasn't completed yet.

```jsx
import React, { Component } from 'react'

import { Visible } from '@codeparticle/react-visible'

...

// Visible can be used to show different things in the same place depending
// on user-defined conditions.

const SignOutButton = ({ logOutHandler }) = <button onClick={logOutHandler}>Sign Out</button>
const SignInButton  = ({ logInHandler }) =  <button onClick={logInHandler}>Sign In</button>

const ToggleLoggedInButton = ({ userIsSignedIn }) => (
<Visible
  when={userIsSignedIn}
  fallback={<SignOutButton logOutHandler={logOut} />}
>
  <SignInButton logInHandler={logIn} />
</Visible>
);

// It can also be used to show a loader for a request that's still waiting.

<Visible when={dataLoaded} fallback={<Loader />}>
  <Content {...props} />
</Visible>

// However, if you try to use nested properties of data that may or may not be loaded,
// you will hit an error. You'll need to encapsulate it in a component first.

// Don't do this if you're waiting on data to load:

<Visible when={dataLoaded} fallback={<Loader />}>
  <Content props={data.payload.nested.maybeExists} />
</Visible>

// Do this, with proper checks and data fallbacks in the Content component itself:

import { Content } from 'components';

<Visible when={dataLoaded} fallback={<Loader />}>
  <Content {...props} />
</Visible>
```

## License

Copyright 2019 Code Particle Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
