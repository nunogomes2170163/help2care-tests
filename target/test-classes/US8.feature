Feature: Manage Caregivers
  As an healthcare professional
  I want to manage my caregivers
  So that I prepare them for the mobile app


  #BLOCK AND UNBLOCK
  Scenario: Block Quiz
    Given I access the "details" page of the "caregiver" caregiver
    When I press the "block" button - USeight
    Then I should be redirected to the "details" page of the "caregiver" caregiver
    And the "unblock" button should be present - USeight

  Scenario: Unblock Quiz
    Given I access the "details" page of the "caregiver" caregiver
    And the caregiver is blocked
    When I press the "unblock" button - USeight
    Then I should be redirected to the "details" page of the "caregiver" caregiver
    And the "block" button should be present - USeight
