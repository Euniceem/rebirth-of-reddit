"use strict"

const subRedditForum = new XMLHttpRequest();

function awwReddit() {
  let obj = JSON.parse(this.responseText);

  for (var i = 1; i < obj.data.children.length; i++) {

    let container = document.createElement('div');
    container.id = 'container';
    main.appendChild(container);

    let imageContent = document.createElement('div');
    imageContent.id = "imageContent";
    container.appendChild(imageContent)

    let image = document.createElement('IMG');
    image.className = 'photo';
    image.src = obj.data.children[i].data.thumbnail;
    imageContent.appendChild(image);

    let title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = obj.data.children[i].data.title;
    container.appendChild(title);

    let miniContainer = document.createElement('div');
    miniContainer.id = 'miniContainer';
    container.appendChild(miniContainer)

    let author = document.createElement('span');
    author.className = 'author';
    author.id = 'author'
    author.innerHTML = 'by ' + obj.data.children[i].data.author;
    miniContainer.appendChild(author);

    let middleDotA = document.createElement('span');
    middleDotA.className = 'dot';
    middleDotA.innerHTML = '&#8226;';
    miniContainer.appendChild(middleDotA);

    let date = document.createElement('span');
    date.className = 'date';
    date.id = 'date'
    date.innerHTML = moment.unix(obj.data.children[i].data.created_utc).fromNow();
    miniContainer.appendChild(date);

    let middleDotB = document.createElement('span');
    middleDotB.className = 'dot';
    middleDotB.innerHTML = '&#8226;';
    miniContainer.appendChild(middleDotB);

    let views = document.createElement('span');
    views.className = 'views';
    views.id = 'views'
    views.innerHTML = obj.data.children[i].data.ups + ' views';
    miniContainer.appendChild(views);

    let description = document.createElement('div');
    description.className = 'description';
    description.innerHTML = obj.data.children[i].data.selftext;
    container.appendChild(description);

  }
}

subRedditForum.addEventListener("load", awwReddit);
subRedditForum.open("GET", "https://www.reddit.com/r/aww/.json");
subRedditForum.send();

//clear container
function clear() {
  let main = document.querySelector('#main');
  main.innerHTML = " ";
}

// Get The App

const subRedditForumA = new XMLHttpRequest();

const myApp = document.querySelector('#getTheApp');

function getMyApp() {
  clear();
  let obj = JSON.parse(this.responseText);

  for (var i = 1; i < obj.data.children.length; i++) {

    let container = document.createElement('div');
    container.id = 'container';
    main.appendChild(container);

    let imageContent = document.createElement('div');
    imageContent.id = "imageContent";
    container.appendChild(imageContent)

    let image = document.createElement('IMG');
    image.className = 'photo';
    image.src = obj.data.children[i].data.thumbnail;
    imageContent.appendChild(image);

    let title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = obj.data.children[i].data.title;
    container.appendChild(title);

    let miniContainer = document.createElement('div');
    miniContainer.id = 'miniContainer';
    container.appendChild(miniContainer)

    let author = document.createElement('span');
    author.className = 'author';
    author.id = 'author'
    author.innerHTML = 'by ' + obj.data.children[i].data.author;
    miniContainer.appendChild(author);

    let middleDotA = document.createElement('span');
    middleDotA.className = 'dot';
    middleDotA.innerHTML = '&#8226;';
    miniContainer.appendChild(middleDotA);

    let date = document.createElement('span');
    date.className = 'date';
    date.id = 'date'
    date.innerHTML = moment.unix(obj.data.children[i].data.created_utc).fromNow();
    miniContainer.appendChild(date);

    let middleDotB = document.createElement('span');
    middleDotB.className = 'dot';
    middleDotB.innerHTML = '&#8226;';
    miniContainer.appendChild(middleDotB);

    let views = document.createElement('span');
    views.className = 'views';
    views.id = 'views'
    views.innerHTML = obj.data.children[i].data.ups + ' views';
    miniContainer.appendChild(views);

    let description = document.createElement('div');
    description.className = 'description';
    description.innerHTML = obj.data.children[i].data.selftext;
    container.appendChild(description);

  }
}

myApp.addEventListener("click", function () {
  subRedditForumA.addEventListener("load", getMyApp);
  subRedditForumA.open("GET", "https://www.reddit.com/r/todayilearned/.json");
  subRedditForumA.send();
});

// Get Board

const subRedditForumB = new XMLHttpRequest();

const getBoard = document.querySelector('#myBoards');

function getMyBoard() {
  clear();
  let obj = JSON.parse(this.responseText);

  for (var i = 1; i < obj.data.children.length; i++) {

    let container = document.createElement('div');
    container.id = 'container';
    main.appendChild(container);

    let imageContent = document.createElement('div');
    imageContent.id = "imageContent";
    container.appendChild(imageContent)

    let image = document.createElement('IMG');
    image.className = 'photo';
    image.src = obj.data.children[i].data.thumbnail;
    imageContent.appendChild(image);

    let title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = obj.data.children[i].data.title;
    container.appendChild(title);

    let miniContainer = document.createElement('div');
    miniContainer.id = 'miniContainer';
    container.appendChild(miniContainer)

    let author = document.createElement('span');
    author.className = 'author';
    author.id = 'author'
    author.innerHTML = 'by ' + obj.data.children[i].data.author;
    miniContainer.appendChild(author);

    let middleDotA = document.createElement('span');
    middleDotA.className = 'dot';
    middleDotA.innerHTML = '&#8226;';
    miniContainer.appendChild(middleDotA);

    let date = document.createElement('span');
    date.className = 'date';
    date.id = 'date'
    date.innerHTML = moment.unix(obj.data.children[i].data.created_utc).fromNow();
    miniContainer.appendChild(date);

    let middleDotB = document.createElement('span');
    middleDotB.className = 'dot';
    middleDotB.innerHTML = '&#8226;';
    miniContainer.appendChild(middleDotB);

    let views = document.createElement('span');
    views.className = 'views';
    views.id = 'views'
    views.innerHTML = obj.data.children[i].data.ups + ' views';
    miniContainer.appendChild(views);

    let description = document.createElement('div');
    description.className = 'description';
    description.innerHTML = obj.data.children[i].data.selftext;
    container.appendChild(description);

  }
}

getBoard.addEventListener("click", function () {
  clear();
  subRedditForum.addEventListener("load", getMyBoard);
  subRedditForum.open("GET", "https://www.reddit.com/r/movies/.json");
  subRedditForum.send();
})

//Random

const subRedditForumC = new XMLHttpRequest();

const random = document.querySelector('#random');

const randomArr = [
  "https://www.reddit.com/r/marvelstudios/.json",
  "https://www.reddit.com/r/pokemon/.json",
  "https://www.reddit.com/r/kpop/.json",
  "https://www.reddit.com/r/pics/.json",
  "https://www.reddit.com/r/PoliticalHumor/.json",
  "https://www.reddit.com/r/interestingasfuck/.json",
  "https://www.reddit.com/r/funny/.json",
  "https://www.reddit.com/r/ProgrammerHumor/.json"
]

function getMyRandom() {
  const getRandom = JSON.parse(this.responseText);
  clear();

  for (var i = 0; i < randomArr.length; i++) {

    for (var i = 1; i < obj.data.children.length; i++) {

      let container = document.createElement('div');
      container.id = 'container';
      main.appendChild(container);

      let imageContent = document.createElement('div');
      imageContent.id = "imageContent";
      container.appendChild(imageContent)

      let image = document.createElement('IMG');
      image.className = 'photo';
      image.src = obj.data.children[i].data.thumbnail;
      imageContent.appendChild(image);

      let title = document.createElement('div');
      title.className = 'title';
      title.innerHTML = obj.data.children[i].data.title;
      container.appendChild(title);

      let miniContainer = document.createElement('div');
      miniContainer.id = 'miniContainer';
      container.appendChild(miniContainer)

      let author = document.createElement('span');
      author.className = 'author';
      author.id = 'author'
      author.innerHTML = 'by ' + obj.data.children[i].data.author;
      miniContainer.appendChild(author);

      let middleDotA = document.createElement('span');
      middleDotA.className = 'dot';
      middleDotA.innerHTML = '&#8226;';
      miniContainer.appendChild(middleDotA);

      let date = document.createElement('span');
      date.className = 'date';
      date.id = 'date'
      date.innerHTML = moment.unix(obj.data.children[i].data.created_utc).fromNow();
      miniContainer.appendChild(date);

      let middleDotB = document.createElement('span');
      middleDotB.className = 'dot';
      middleDotB.innerHTML = '&#8226;';
      miniContainer.appendChild(middleDotB);

      let views = document.createElement('span');
      views.className = 'views';
      views.id = 'views'
      views.innerHTML = obj.data.children[i].data.ups + ' views';
      miniContainer.appendChild(views);

      let description = document.createElement('div');
      description.className = 'description';
      description.innerHTML = obj.data.children[i].data.selftext;
      container.appendChild(description);

    }
  }
}
