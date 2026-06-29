Feature: ParaBank User Registration

As a new user
I want to register on the ParaBank application
So that I can access my account and view my account balance.

Background:
Given the user launches the ParaBank application

@registration
Scenario: Register a new user successfully
When the user navigates to the registration page
And the user enters valid registration details
And the user submits the registration form
Then the account should be created successfully
And the Accounts Overview page should be displayed
And the account balance should be displayed
And the account balance should be printed in the console
