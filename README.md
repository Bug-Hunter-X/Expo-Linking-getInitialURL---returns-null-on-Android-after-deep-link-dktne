# Expo Linking.getInitialURL() returns null on Android

This repository demonstrates a common issue encountered when using Expo's `Linking` API to handle deep links on Android. The `getInitialURL()` method unexpectedly returns `null`, even though the deep link is successfully opened.

The `bug.js` file showcases the problem, and `bugSolution.js` provides a solution to reliably handle deep links.

## Problem

The problem is that `Linking.getInitialURL()` might return `null` on Android after opening a deep link, making it difficult to handle the deep link appropriately.  This happens inconsistently, making debugging challenging.