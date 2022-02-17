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
      date: '05-07-2020',
      picture: ''
    },
    returns: {
      returnBy: '04-04-2020',
      isReturned: false,
      date: '',
      items: []
    }
  }
  // TEMPLATE FOR NEXT ORDER
  // {
  //   id: 0,
  //   order: {
  //     number: '11-32883177-2648248',
  //     date: '03-07-2020',
  //     items: [
  //       {
  //         number: 'B07Q8RPBM9',
  //         name: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
  //         weight: '13.3 ounces',
  //         dimensions: '3.23 x 6.1 x 5.73',
  //         manufacturer: 'Nintendo',
  //         binding: 'Video Game',
  //         price: 94.95
  //       }
  //     ],
  //     // doing this for my own benefit, OOP is hard and i suck :)
  //     total: function () {
  //       var price = 0;
  //       for (var i in this.items) {
  //         price += this.items[i].price;
  //       }
  //       console.log('the total for order #' + this.number + ' is $' + price);
  //     }
  //   },
  //   delivery: {
  //     shipped: true,
  //     delivered: true,
  //     date: '05-07-2020',
  //     picture: ''
  //   },
  //   returns: {
  //     returnBy: '04-04-2020',
  //     isReturned: false,
  //     date: '',
  //     items: []
  //   }
  // }
];
