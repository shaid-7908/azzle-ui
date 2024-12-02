 # Workmate for Entity Resolution
 ![image 2](../blog-image/blog-17/blog-17-dash.png)
 Workmate provides a comprehensive toolkit for rapidly deploying and facilitating Entity Resolution on your data. Leveraging ML frameworks  Workmate identifies and suggests resolution of similar entities (i.e., persons, organizations, products).
## Overview
The Entity Resolution Framework offers a comprehensive toolset designed to facilitate the identification of similar entities. With a scalable architecture, this robust solution includes a user-friendly Configuration Interface and a Match Confirmation Interface, both of which are operational immediately and fully customizable.

The framework allows users to tailor the user interface to their preferences using a provided template. They can select from a wide array of cleaning, pairing, and comparison techniques, or even develop custom techniques to meet their unique requirements. This level of full configurability is combined with the simplicity of an out-of-the-box solution.

The app executes a series of configurable steps through the Configuration Interface to ensure accurate and efficient entity resolution, catering to specific needs:

- Cleaning: This initial phase focuses on purifying the input data to enhance the quality of comparisons. For instance, it employs a standardized method for cleaning company names, ensuring uniformity and reducing discrepancies that could hinder accurate pairing.
- Pairing: In this critical step, the app employs sophisticated algorithms to intelligently pair rows of data. This approach avoids the inefficient method of comparing every row with one another. A notable example includes utilizing the Maximum Jaccardian Distance to establish pairs, optimizing the process for speed and accuracy.
- Comparison: The final stage involves the application of advanced algorithms to assess the matched pairs and assign a probability score indicating the likelihood of a match. An example of such an algorithm is the normalized Indel distance, which quantifies similarities  between pairs, providing a robust basis for determining potential matches.