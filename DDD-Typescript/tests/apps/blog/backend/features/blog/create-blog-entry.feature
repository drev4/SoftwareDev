Feature: Creat a new blog entry
  In order to have blog entries in the blog
  As a user with admin permissions
  I wanto to create a new blog entry

  Scenario: A valid non existing blog entry
    Given I send a PUT request to "/blogentry/670b9562-b30d-52d5-b827-655787665500" with body
    """
    {
      "title": "Blog Post",
      "subtitle": "My first blog entry",
      "body": "This is my first blog entry on the website",
      "author": "Diego",
      "author_id": "1",
      "created_date": "05/18/2022"
    }
    """
    Then the response status code should be 201
    And the response should be empty
