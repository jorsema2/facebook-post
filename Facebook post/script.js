const post = {
  author: "Cristian Florea",
  title: "10 interview questions you should know.",
  date: "Yesterday at 1:18 AM",
  bodyPost: {
    text: "https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95",
    externalLink: {
      image: "",
      domain: "MEDIUM.COM",
      externalTitle: "10 Interview Questions Every JavaScript Developer Should Know"
    }
  },
  unit: {
    unitNumber: "1",
    topic: "Interviewing",
    unitTitle: "10 interview questions you should know"
  },
  viewers: 8,
  likes: 0,
  comments: []
}

const author = document.getElementById('author');
const title = document.getElementById('title');
const date = document.getElementById('date');
const text = document.getElementById('text');
const image = document.getElementById('image');
const domain = document.getElementById('domain');
const externalTitle = document.getElementById('externalTitle');
const unitNumber = document.getElementById('unitNumber');
const topic = document.getElementById('topic');
const unitTitle = document.getElementById('unitTitle');
const viewers = document.getElementById('viewers');
const likesNumber = document.getElementById('likes');
const form = document.getElementById("commentSection"); //Find the element with the id "commentSection"
const comments = document.getElementById('comments');

author.innerHTML = post.author;
title.innerHTML = post.title;
date.innerHTML = post.date;
text.innerHTML = post.bodyPost.text;
image.innerHTML = post.bodyPost.externalLink.image;
domain.innerHTML = post.bodyPost.externalLink.domain;
externalTitle.innerHTML = post.bodyPost.externalLink.externalTitle;
unitNumber.innerHTML = post.unit.unitNumber;
topic.innerHTML = post.unit.topic;
unitTitle.innerHTML = post.unit.unitTitle;
viewers.innerHTML = post.viewers;
likesNumber.innerHTML = post.likes;
comments.innerHTML = post.comments;

function addComment() {
  doNotRefresh();
  storeComment();
  publishComment();
}

function storeComment() {
  const input = document.getElementById('comments').value;
  comments.push(input);
}

function publishComment() {
  const list = document.getElementById('publishedComments');
  list.innerHTML = " ";

  for (i = 0; i < comments.length; i++) {
    const li = document.createElement("li");
    const liText = document.createTextNode(comments[i]);
    const listItem = li.appendChild(liText);
    list.appendChild(listItem);
  }
};

function doNotRefresh() {
  form.addEventListener('submit', doNotRefresh);
  event.preventDefault();
};

function increment() {
  if (post.likes < 10) {
    post.likes++;
    likesNumber.innerHTML = post.likes;
  }
};

/* function countOne() {
if (likesNumber < 50) {
  for (i = 0; i < 1; i ++) {
    document.getElementById('likes').innerHTML = post.likes++;
    return likesNumber++;
  }
} else {
  document.getElementById('likes').innerHTML = post.likes = 50;
}
}; */

// fetch("https://api.themoviedb.org/3/movie/550?api_key=d2788c89c4f55d19e63381c2d04593df").then(data => data.json()).then(data => console.log(data))