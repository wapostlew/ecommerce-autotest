Feature: Checkout Flow
    Scenario: Complete checkout process
        Given I am logged in
        When I add "Sauce Labs Backpack" to the cart
        And I proceed to checkout
        And I complete the purchase with valid details
        Then I should see the order confirmation message