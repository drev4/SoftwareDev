Feature: Api Status
  In order to know the server is up and running
  As a health check
  I want to check the api status

  Scenario: Check Api Status
    Given I send a GET request to "/status"
    Then the response status code should be 200
