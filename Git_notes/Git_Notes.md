### **What is Git?**

**Git is a version control system used to track changes in your code and manage different versions of a project.**

For example, when you write code today and modify it tomorrow, Git keeps track of those changes so you can:

- See what changes you made.
- Go back to an older version of your code.
- Save different versions of your project.
- Work with other developers.

### **What is GitHub?**

**GitHub is an online platform where you can store, manage, and share your Git repositories.**

It allows you to:

- Store your code online.
- Share projects with others.
- Collaborate with developers.
- Showcase your projects to employers.

### **Simple difference**

| Git                               | GitHub                         |
| --------------------------------- | ------------------------------ |
| A tool installed on your computer | An online platform             |
| Tracks code changes               | Stores Git repositories online |
| Works locally                     | Works over the internet        |
| Helps manage versions             | Helps share and collaborate    |

**Real-life example:**

Imagine you're building a Django project.

- **Git** tracks changes you make to your Django code.
- **GitHub** stores your project online so you can access it from anywhere and share it with others.

> **Git = Tracks and manages code changes.**\
> **GitHub = Stores and shares your code online.**

The main difference between **Branching** and **Merging** in Git is:

| Feature         | Branching                                                      | Merging                                    |
| --------------- | -------------------------------------------------------------- | ------------------------------------------ |
| **Meaning**     | Creating a separate line of development                        | Combining changes from different branches  |
| **Purpose**     | Work on features independently without affecting the main code | Bring changes from one branch into another |
| **Git Command** | `git branch <branch-name>`                                     | `git merge <branch-name>`                  |
| **When used**   | Before starting new feature development                        | After completing work on a branch          |
| **Example**     | Create a `login` branch                                        | Merge `login` branch into `main`           |

### **Simple Example**

Imagine you have a project:

```
main
```

### **1. Branching**

You create a new branch to work on a login feature:

```
git branch login
```

Now you have two branches:

```
main
  |
  |------ login
```

You can work on the `login` branch without affecting the `main` branch.

### **2. Merging**

After completing the login feature, you want to add those changes to `main`.

First, switch to `main`:

```
git checkout main
```

Then merge the `login` branch:

```
git merge login
```

Now the changes from `login` are combined into `main`.

### **Remember this**

> **Branching = Create a separate path for development.**\
> **Merging = Combine changes from separate paths.**

Branching separates the work; merging brings the work together.
