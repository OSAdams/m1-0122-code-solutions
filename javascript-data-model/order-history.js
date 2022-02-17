// ASSUMING THIS ORDER HISTORY IS STRICTLY FOR JS Masher

var orderHistory = [
  {
    id: 0,
    order: {
      number: '11-32883177-2648248',
      date: '03-07-2020',
      items: [
        {
          number: '0596008945',
          name: 'The Art of SQL',
          weight: '1.27 pounds',
          dimensions: '7 x 0.96 x 9.19 inches',
          publisher: 'O\'Reilly Media',
          binding: 'Paperback',
          author: 'Faroult, Stephane',
          pages: 370,
          price: 33.99
        },
        {
          number: 'B07Q8RPBM9',
          name: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
          weight: '13.3 ounces',
          dimensions: '3.23 x 6.1 x 5.73',
          manufacturer: 'Nintendo',
          binding: 'Video Game',
          price: 94.95
        }
      ],
      // doing this for my own benefit, OOP is hard and i suck :)
      total: function () {
        var price = 0;
        for (var i in this.items) {
          price += this.items[i].price;
        }
        // i'd just return price and assign value to a variable then
        // update the dom for real world use
        return 'the total for order #' + this.number + ' is $' + price;
      }
    },
    delivery: {
      shipped: true,
      delivered: true,
      customerHome: false,
      date: '05-07-2020',
      picture: ''
    },
    returns: {
      returnBy: '04-08-2020',
      isReturned: false,
      date: '',
      items: []
    }
  },
  {
    id: 1,
    order: {
      number: '114-287557-9059409',
      date: '04-07-2020',
      items: [
        {
          number: 'B07F36FWMQ',
          name: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for Wii U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
          weight: '4.8 ounces',
          dimensions: '5.4 x 4.6 x 1.6 inches',
          manufacturer: 'Chuanghogtai-Tec',
          binding: 'Video Game',
          price: 15.98
        }
      ],
      total: function () {
        var price = 0;
        for (var i in this.items) {
          price += this.items[i].price;
        }
        return 'the total for order #' + this.number + ' is $' + price;
      }
    },
    delivery: {
      shipped: true,
      delivered: true,
      customerHome: true,
      date: '07-07-2020',
      picture: ''
    },
    returns: {
      returnBy: '05-08-2020',
      isReturned: false,
      date: '',
      items: []
    }
  },
  {
    id: 2,
    order: {
      number: '113-9984268-1280257',
      date: '19-07-2020',
      items: [
        {
          number: '0195024028',
          name: 'The Timeless Way of Building',
          weight: '1.53 pounds',
          dimensions: '7.9 x 1.5 x 5.6 inches',
          publisher: 'Oxford University Press',
          binding: 'Hard Cover',
          author: 'Alexander, Christopher',
          pages: 552,
          price: 41.33
        }
      ],
      total: function () {
        var price = 0;
        for (var i in this.items) {
          price += this.items[i].price;
        }
        return 'the total for order #' + this.number + ' is $' + price;
      }
    },
    delivery: {
      shipped: true,
      delivered: true,
      customerHome: true,
      date: '20-07-2020',
      picture: ''
    },
    returns: {
      returnBy: '19-08-2020',
      isReturned: false,
      date: '',
      items: []
    }
  },
  {
    id: 3,
    order: {
      number: '114-3941589-8772232',
      date: '04-08-2020',
      items: [
        {
          number: '1091210098',
          name: 'JavaScript for impatient programmers',
          weight: '2 pounds',
          dimensions: '7 x 1.19 x 10 inches',
          publisher: 'Independently published',
          binding: 'Paperback',
          author: 'Rauschmayer, Dr. Axel',
          pages: 426,
          price: 31.55
        }
      ],
      total: function () {
        var price = 0;
        for (var i in this.items) {
          price += this.items[i].price;
        }
        return 'the total for order #' + this.number + ' is $' + price;
      }
    },
    delivery: {
      shipped: true,
      delivered: true,
      customerHome: false,
      date: '08-08-2020',
      picture: ''
    },
    returns: {
      returnBy: '07-09-2020',
      isReturned: false,
      date: '',
      items: []
    }
  }
];

console.log(orderHistory[0].order.total());
console.log(orderHistory[1].order.total());
console.log(orderHistory[2].order.total());
console.log(orderHistory[3].order.total());
