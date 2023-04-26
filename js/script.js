// Раскидать людей в разные массивы в зависимости от их почты
let users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
   ]
  let emails = {
    org: [],
    net: [],
    info: []
  }
  let other = []
  for(let item of users){
    if(item.email.includes('org') === true){
    emails.org.push(item)
    }else if(item.email.includes('net') === true){
      emails.net.push(item)
    }else if(item.email.includes('info') === true){
      emails.info.push(item)
    }else{
      other.push(item)
    }
  }
  console.log(emails);
  console.log(other);
  
  
  let arr3 = [1, 'hello', true, 2, 3, 'world', undefined, null, 'error', 22];
  
  let iter = 0
  let n = 0 
  for(let item of arr3){
     iter++
  
    if(typeof(item) === 'number'){
      n+=1 
    }
  }
  if(n >5){
  console.log('good');  
  }else{
    console.log('bad');
  }
    console.log(iter);
  console.log(n);
  
  
  let arr = [
      {
          id: Math.random(),
          name: 'Timur',
          info: {
              school: '235',
              faculity: 'SMM'
          },
      },
      {
          id: Math.random(),
          name: 'Imran',
          info: {
              school: 'ne izvestno',
              faculity: 'programming'
          },
      },
      {
          id: Math.random(),
          name: 'Aminjon',
          info: {
              school: '444',
              faculity: 'Dizayn'
          },
      },
      {
          id: Math.random(),
          name: 'Maxmud',
          info: {
              school: '777',
              faculity: '3dsmax'
          },
      },
      {
          id: Math.random(),
          name: 'Muxammad',
          info: {
              school: '5555',
              faculity: 'Backend'
          },
      },
      {
          id: Math.random(),
          name: 'Timur',
          info: {
              school: '235',
              faculity: 'SMM'
          },
      },
      {
          id: Math.random(),
          name: 'Imran',
          info: {
              school: 'ne izvestno',
              faculity: 'programming'
          },
      },
      {
          id: Math.random(),
          name: 'Aminjon',
          info: {
              school: '444',
              faculity: 'Dizayn'
          },
      },
      {
          id: Math.random(),
          name: 'Maxmud',
          info: {
              school: '777',
              faculity: '3dsmax'
          },
      },
      {
          id: Math.random(),
          name: 'Maxmud',
          info: {
              school: '777',
              faculity: '3dsmax'
          },
      },
      {
          id: Math.random(),
          name: 'Muxammad',
          info: {
              school: '5555',
              faculity: 'Backend'
          },
      },
  ]
  
  let categories = [
      {
          course: 'SMM',
          count: 0
      },
      {
          course: 'PROGRAMMING',
          count: 0
      },
      {
          course: '3DSMAX',
          count: 0
      },
      {
          course: 'DIZAYN',
          count: 0
      },
      {       
          course: 'BACKEND',
          count: 0
      },
  ]
  
  // Описание задачи 
  
  // Найти количество людей одного типа из массива и сохранить их в массив категории 
  // В массиве категорий специально допущены ошибки (исходный массив менять нельзя)
  
   
  for(let item of arr) {
    let faculity = item.info.faculity.toLocaleLowerCase().trim()
    for(let element of categories){
      let elem = element.course.toLocaleLowerCase().trim()
      if (faculity === elem) {
          element.count++
      }
    }
  }
  console.log(categories);
  
  