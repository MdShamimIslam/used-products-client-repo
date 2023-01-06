import React from 'react';
import BlogQuestion from './BlogQuestion';

const Blog = () => {
  const data = [
		{
			id: 1,
			question: 'What are the different ways to manage a state in a React application ?',
			answer: `The Four Kinds of React State to Manage
        When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

There are four main types of state you need to properly manage in your React apps:
 
Let's cover each of these in detail:

Local (UI) state – Local state is data we manage in one or another component.

Local state is most often managed in React using the useState hook.

For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

Global (UI) state – Global state is data we manage across multiple components.

Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

Sometimes state we think should be local might become global.

Server state – Data that comes from an external server that must be integrated with our UI state.

Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

Fortunately there are tools such as SWR and React Query that make managing server state much easier.

URL state – Data that exists on our URLs, including the pathname and query parameters.`,
		},
		{
			id: 2,
			question: 'How does prototypical inheritance work in react?',
			answer: `Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date`,
		},
		{
			id: 3,
			question: 'What is a unit test? Why should we write unit tests?',
			answer: `The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.`,
		},
		{
			id: 4,
			question: 'React vs. Angular vs. Vue?',
			answer: `Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option`,
		}
	];
  return (
    <div className='w-[90%] my-12   mx-auto'>
			<h1 className='text-center my-4 text-4xl font-bold'>Blog Question</h1>
  <div>
		  {
        data.map( (info) => <BlogQuestion key={info.id} info = {info}></BlogQuestion> )
      }
	</div>
    
      
    </div>
  );
};

export default Blog;