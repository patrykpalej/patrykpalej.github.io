---
title: Missing data in machine learning

categories: [Knowledge, Data]
tags: [mid-level, machine-learning, data-science]

pin: false
blog: true

math: false
mermaid: false
---

One of the most common issues regarding training machine learning models is dealing with missing data. This problem isn't just about having less information to feed the model, but also that many machine learning algorithms can't handle missing data. In this article, I'm going to give a quick overview of the most important issues related to this topic.

### Which models accept missing data?
Out of the most common machine learning algorithms, like: decision trees (+ their ensembles), linear models, SVM, KNN etc. only decision trees support using missing data. At least in scikit-learn implementation. When using any other algorithm, we must remove NaN values first. The most common methods for this are:
- imputation
- deletion

### Nature of missing data

Before proceeding to these methods, let's first understand the nature and patterns in the missing data. Identifying why the data is missing is crucial in choosing the right strategy for handling it. Broadly, missing data can be categorized into three types: 
- Missing Completely At Random (**MCAR**)
- Missing At Random (**MAR**)
- Missing Not At Random (**MNAR**)

Let's dive into all of these categories, considering a case of a survey in which you are asked to provide various details about you, including your income.

#### MCAR
This type of NaN values occurs when the absence of data is completely independent of any other data, implying that the reasons for the missing values are entirely random and have no relation to the dataset.

**Example:**
Some respondents skipped this question because of missing it. They didn't omit the question by intentention.

#### MAR
Missing At Random occurs when the missingness of data in one feature is related to other features in the dataset, but not to the missing value itself. In other words, while the data is not missing completely at random, the tendency for a data point to be missing is only related to some of the observed data.

**Example:**
Younger respondents may be more open to disclosing their incomes, while older ones might consider such information confidential.

#### MNAR
Missing Not At Random occurs when the missingness is related to the unobserved data itself. In other words, there is a reason related to the missing data which influences its absence.

**Example:** High-income individuals might intentionally skip the income question due to privacy concerns. Here, the tendency to omit the income information is directly related to the income value itself.

### Meaning of the missing data

There is also another dichotomy of NaN values which regards their meaning. We distinguish the following categories:
- informative missing data
- non-informative missing data

**Informative missing data** occurs when the absence of a value itself provides some insights. 

For example, if there is a missing value for the "University Degree" field, it may indicate that the individual did not obtain a degree from any university. This conveys a specific information.

**Non-informative missing data** happens when the absence of data does not convey any additional information about the dataset. This typically happens in situations where data is missing completely at random, without any underlying pattern or reason related to the data itself. 

For example, if there is a NaN value for age, we cannot determine the reason for this missingness, as in fact there is always an actual value for this feature.

### How to deal with missing data?

As stated before, there are two main ways of handling missing data:
- imputation (assigning a value in place of a NaN)
- deletion

Main reasons to choose **imputation**:
- The occurrence of missing values is a natural process, and the model should be able to handle them
- We can explain the nature of the missingness, thus we can substitute it with a specific value
- Missing data occur in many rows, and we do not want to remove a significant portion of the data
- The dataset has many important features, but only a few contain empty values

Main reasons to choose **deletion**:
- Data is Missing Completely At Random and it's not going to happen on a regular basis
- The presence of NaN values is marginal, and their deletion will not significantly impact the size of the dataset

Have in mind, that usually deletion means deleting **rows** with NaN values. However, if there is a feature with a lot of missing data, it might be better to delete the whole **column**.

### Methods of imputation
While deleting data is a simple process, imputation is definitely more complex. There are multiple methods of imputation, such as:

#### Imputing a specific value
Sometimes, understanding the nature of a NaN allows for a logical explanation. For example, if there is missing data for the question "How many cigarettes do you smoke a day?" and it is known that the person is a non-smoker, we can reasonably impute the value as 0.

#### Imputing a calculated value
For categoric features we may impute the most frequent category in the dataset, as it's the most likely value.

For numeric features we may impute the mean or median, as it's the most representative value for that feature. Imputing the mean works well for symmetrically distributed data, where the mean provides a good central estimate. However, in skewed distributions, the median is often a better choice as it is less affected by outliers.

#### Imputing a value calculated in a subset
When calculating mean, median or mode, we can use only a subset of the whole dataset which consists of the most similar observations in terms of some other features.

#### Training a model for estimating the missing values
Training an auxiliary model to estimate missing data is a sophisticated approach that involves using existing data to predict absent values. For instance, a regression model could be used for estimating continuous numeric data, whereas a classification model might be appropriate for categoric data.

This approach may not always be optimal, as it can lead to an increase in the computational complexity of the overall problem.
