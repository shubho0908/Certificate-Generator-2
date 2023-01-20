# CCG-College-Project

This is a course certificate generator project specially for those people who create **Online Learning (E-Learning) Courses** and looking for a site which can help them to generate **FREE** certificates for the people who applied for their respective courses.

**NOTE**: This is college project associated with **[SSTC](https://www.sstc.ac.in/)**.

# How to use?

Visit: [Course Certificate Generator](https://certificate-generator.live)

Right now we have only 9 templates to edit.

![1](https://user-images.githubusercontent.com/81776711/204787730-2c274adb-9225-4b04-8f85-5b78bfc966d2.PNG)

Choose any one of the templates from the list as shown.

Then fill-up the required details in correct manner and press **Generate**.

![2](https://user-images.githubusercontent.com/81776711/204788238-0cb68114-bfc2-47c1-9172-776abf86643e.PNG)

You can choose Varients, add Authorized-signatures (scanned images recommended) and change Fonts also, after that click on the **Download** button.

Now, follow the following steps to download your Certificate:

**1. Choose 'Save As PDF' from the printer option & select 'Landscape' mode from the Layout option.**

![3](https://user-images.githubusercontent.com/81776711/204789002-552c73e5-ebe6-4131-84a8-258673557cde.PNG)

**2. Now select 'Odd Pages Only' from the Pages section or manually type the page number in which the Full Certificate is visible.**

![4](https://user-images.githubusercontent.com/81776711/204789422-7e650ad2-40b2-4b7c-8982-99a1ec50b82f.PNG)

**3. Now from More settings, Disable the Headers and Footers & Enable Background Graphics and press save.**

![5](https://user-images.githubusercontent.com/81776711/204789615-b83f7fbc-8ef7-4210-9ba6-d77138720b77.PNG)

**Congrats! Your certificate is downloaded.**

**Final Product:**

![6](https://user-images.githubusercontent.com/81776711/204790794-0a7fb8c5-1483-4fee-b2d9-904ac796d868.PNG)


# Why we used window.print() function instead of any Dom-to-Pdf JS Library?

Well, at the time of making the project those libraries were not working may be due to server problem or something and some of them which worked were not able to render the graphics or font properly. That's why we chose this method instead of libraries.
