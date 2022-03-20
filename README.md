# hrm-react-saga

This is a HR management project
It is built using _React 17.0.2_ , _Redux 4.1.2_, _saga_ and _material UI 5.0_.  
It consumes data from one of my other project developed using Node.js and MySQL

**Scripts Available:**

1. To install dependencies: **`yarn`**
2. To run the project: **`yarn start`**
3. To run unti test cases and get coverage report: **`yarn test:coverage`**

Test Coverage Report:

| File                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| ------------------------- | ------- | -------- | ------- | ------- | ----------------- |
| All files                 | 86.73   | 62.58    | 87.89   | 86.23   |
| src                       | 100     | 100      | 100     | 100     |
| App.tsx                   | 100     | 100      | 100     | 100     |
| api.ts                    | 100     | 100      | 100     | 100     |
| src/components            | 94.73   | 64       | 94.64   | 94.73   |
| AddAttendance.tsx         | 96.15   | 50       | 100     | 96.15   | 64                |
| ApplyLeave.tsx            | 96.96   | 69.23    | 100     | 96.96   | 78                |
| Attendance.tsx            | 100     | 100      | 100     | 100     |
| Dashboard.tsx             | 100     | 100      | 100     | 100     |
| LeaveTypes.tsx            | 87.5    | 100      | 66.66   | 87.5    | 37                |
| Leaves.tsx                | 83.33   | 100      | 50      | 83.33   | 64-106            |
| Login.tsx                 | 94.11   | 33.33    | 100     | 94.11   | 41                |
| RegistrationPage.tsx      | 94.44   | 82.35    | 100     | 94.44   | 63-66             |
| UserInfo.tsx              | 100     | 50       | 100     | 100     | 26                |
| src/components/core       | 81.81   | 77.77    | 62.5    | 84.37   |
| AppBar.tsx                | 78.57   | 81.25    | 57.14   | 81.48   | 31,34,46,102,128  |
| Auth.tsx                  | 100     | 50       | 100     | 100     | 8                 |
| Footer.tsx                | 100     | 100      | 100     | 100     |
| src/components/shared     | 96      | 0        | 85.71   | 96      |
| CalendarComponent.tsx     | 91.66   | 0        | 66.66   | 91.66   | 31                |
| HolidayList.tsx           | 100     | 100      | 100     | 100     |
| WeeklyAttendance.tsx      | 100     | 100      | 100     | 100     |
| src/redux                 | 100     | 100      | 100     | 100     |
| selectors.ts              | 100     | 100      | 100     | 100     |
| src/redux/actions         | 80      | 33.33    | 85.71   | 71.42   |
| addAttendanceAction.ts    | 100     | 100      | 100     | 100     |
| applyLeaveAction.ts       | 100     | 100      | 100     | 100     |
| attedanceDetailsAction.ts | 100     | 100      | 100     | 100     |
| designationListAction.ts  | 100     | 100      | 100     | 100     |
| eventDetailsAction.ts     | 100     | 100      | 100     | 100     |
| index.ts                  | 0       | 0        | 0       | 0       |
| leaveBalanceAction.ts     | 100     | 100      | 100     | 100     |
| loginAction.ts            | 100     | 100      | 100     | 100     |
| registerAction.ts         | 100     | 100      | 100     | 100     |
| userInfoAction.ts         | 100     | 100      | 100     | 100     |
| usersActions.ts           | 100     | 100      | 100     | 100     |
| utils.ts                  | 25      | 33.33    | 33.33   | 25      | 11-26             |
| src/redux/reducers        | 74.33   | 59.72    | 78.94   | 74.33   |
| addAttendanceReducer.ts   | 100     | 50       | 100     | 100     | 13                |
| allLeavesReducer.ts       | 88.88   | 60       | 50      | 88.88   | 20                |
| applyLeaveReducer.ts      | 100     | 50       | 100     | 100     | 13                |
| attendanceReducer.ts      | 44.44   | 25       | 50      | 44.44   | 17-32             |
| designationListReducer.ts | 100     | 50       | 100     | 100     | 13                |
| eventReducer.ts           | 75      | 62.5     | 50      | 75      | 29-37             |
| index.ts                  | 100     | 100      | 100     | 100     |
| leaveBalanceReducer.ts    | 90.9    | 75       | 50      | 90.9    | 21                |
| leaveCountByMonth.ts      | 52.77   | 50       | 100     | 52.77   | 48-75             |
| loginReducer.ts           | 100     | 50       | 100     | 100     | 13                |
| registerReducer.ts        | 100     | 50       | 100     | 100     | 13                |
| userInfoReducer.ts        | 81.81   | 75       | 100     | 81.81   | 22-23             |
| userListReducer.ts        | 100     | 50       | 100     | 100     | 13                |
| utils.ts                  | 100     | 100      | 100     | 100     |
| src/redux/sagas           | 47.61   | 100      | 0       | 47.61   |
| index.ts                  | 90.9    | 100      | 0       | 90.9    | 53                |
| loginSaga.ts              | 0       | 100      | 0       | 0       | 7-28              |
