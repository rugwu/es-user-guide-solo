---
sidebar_position: 11
title: Flagged Behaviour
---

# Flagged Behaviour

The **Flagged Behaviour** section shows messages and actions on a member's account that has exhibited behaviours that are potentially fraudulent, excessive, erroneous, or suspicious. The section reports on "advices" or fraud control actions that apply to that member's account and provides details about each advice. The advices are generated via the Fraud Plus module resulting from checks run on transactions.

Elements of the rule:

- **ADVICE** - Business user's descriptive name about the applicable rule based on suspected instance of fraud.
- **CONTEXT** - Provides identification of the behaviour that was flagged (**REDEMPTION**, **EARN**).
- **POSTURE** - The action resulting from the behaviour (**LOCK**, **SUSPEND**, **BLOCK**, or **BLOCK - Overridden**).
- **START DATE** - The beginning date of the **POSTURE** for this **CONTEXT** for the member on this flagged behaviour. For example, if the **CONTEXT** is **REDEMPTION** and the **POSTURE** is **BLOCK**, then the member's redemptions are blocked for the duration identified by the dates.
- **END DATE** - The end date of the **POSTURE** for this **CONTEXT** for the member on this flagged behaviour.
- **OVERRIDE** - Control to allow overriding a block from now until the end date. If the button is clicked, the block can be overridden (removed). This column is shown only if you have the corresponding permission applied.

In the example shown below, the Fraud Plus module generates any **Flagged Behaviour** for this member. If there are one or more flagged behaviour, then each row represents an "advice" or the status of a rule that has been applied to the member's account.

:::info
This section will not appear if configuration is not set up to use Fraud Plus fraud prevention features or if the user does not have the correct permissions. 
:::

## Viewing Advices

Below, the Fraud Plus module has indicated an advice (**2 Months Redemption Block**) showing that we **BLOCK** (the **POSTURE**) all attempts at point **REDEMPTION** (the **CONTEXT**) for a specified duration (between the **START DATE** and **END DATE**) for this member.

### To view the advices for the member's account: 

1. From the top menu of the Console, select **Membership > Members**. Select any option and fill in a valid value for the source or destination account for a points transfer, then click **Search**. Then click on the record returned to open the member details page. The Member page of the source account opens.

2. Click in the **Flagged Behaviour** section to expand that section. Details of any advices outstanding on the account are shown in this section. The details include the name of the advice, the context (why the advice was created), the posture (the action taken resulting from the advice), and the start and end dates (to define the duration of the advice).

    ![Viewing flagged behaviour advice](../../../../../images/Flagged%20Behaviour%20-%20One%20Advice%20(RH).png)

If there are no flagged behaviours on the account, the Flagged Behaviour section  shows a message indicating that when expanded. 

![Absence of flagged behaviour](../../../../../images/Flagged%20Behaviour%20-%20No%20Advices.png)

## Overriding a Block

You will only be able to override a redemption block advice if you have the correct permission. If so, you will see the **Override** column in the **Flagged Behaviour** section for any advices and can override any of the blocks listed and not already overridden. 

![Flagged behaviour with an override button](../../../../../images/Flagged%20Behaviour%20with%20Override%20Button.png)


### To override a block:

1. From the top menu of the Console, select **Membership > Members**. Select any option and fill in a valid value for the source or destination account for a points transfer, then click **Search**. Then click on the record returned to open the member details page. The Member page of the source account opens.
2. Click in the **Flagged Behaviours** section to expand that section. Details of any advices outstanding on the account are shown in this section.
3. In the **OVERRIDE** column for the advice you want to override, click the button () in the row where the block is listed. 
4. In the window that opens, fill in the number of day to maintain the override, then click **Proceed**. The number of days must be a positive integer.
5. In the confirmation window, click **Accept**. A message is displayed to validate that the block has been overridden.