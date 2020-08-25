# next + @redux/toolkit + redux-observable

## Description
A boilerplate for next + @redux/toolkit + redux-observable for future reference.

## Note
If your codebase is centered around GraphQL, I strongly recommend sticking to Apollo Client for state + data management, and **DO NOT** recommend this set-up.

This level of state-management would be overkill if your global state can be sufficiently managed with `useReducer`, `useContext` and caching.

If your state becomes complex enough such that the aforementioned strategies prove insufficient, and redux's time-travel would greatly aid in development; only then do I recommend this strategy.
