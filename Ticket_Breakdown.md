# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

- Ticket 1: Add custom Agent ID field to the Agents table

Acceptance Criteria:

A new field "Custom Agent ID" should be added to the Agents table.
The field should allow Facilities to save their own custom ids for each Agent they work with.
The custom Agent ID should be unique per Facility.
Time/Effort Estimate: 2-3 hours

Implementation Details:

Update the Agents table schema to add the "Custom Agent ID" field.
Validate the custom Agent ID to ensure it is unique per Facility.
Update the database migrations to reflect the changes made to the Agents table schema.


- Ticket 2: Modify the getShiftsByFacility function to return custom Agent IDs

Acceptance Criteria:

The getShiftsByFacility function should be updated to return the custom Agent ID saved in the Agents table for each Shift.
If the custom Agent ID for an Agent is not set, the internal database id should be used instead.
Time/Effort Estimate: 1-2 hours

Implementation Details:

Update the getShiftsByFacility function to return the custom Agent ID for each Shift, or the internal database id if the custom Agent ID is not set.
Test the getShiftsByFacility function to ensure it returns the expected results.

- Ticket 3: Modify the generateReport function to use custom Agent IDs

Acceptance Criteria:

The generateReport function should be updated to use the custom Agent ID, if set, when generating reports for Facilities.
If the custom Agent ID is not set, the internal database id should be used instead.

Time/Effort Estimate: 2-3 hours

Implementation Details:

Update the generateReport function to use the custom Agent ID, if set, when generating reports for Facilities.
If the custom Agent ID is not set, the internal database id should be used instead.
Test the generateReport function to ensure it generates reports as expected and includes the correct Agent IDs.

- Ticket 4: Update the User Interface

Acceptance Criteria:

The user interface should be updated to allow Facilities to enter custom Agent IDs for each Agent they work with.
The user interface should allow Facilities to view and edit the custom Agent IDs they have set.
Time/Effort Estimate: 4-5 hours

Implementation Details:

Create a new section in the user interface to allow Facilities to enter and edit custom Agent IDs.
Add validation to ensure that the custom Agent ID is unique per Facility.
Update the user interface to show the custom Agent IDs on the Agents list, and in any other relevant sections of the user interface.
Test the user interface to ensure it works as expected.
