const validator = require('validator');
const yargs = require('yargs');

//costumise version
yargs.version('7.7.0');

//creat command
yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder:{
    title:{
      describe:'title note',
      demandOption:true,
      type:"string"
    },
    body:{
      describe:'note body',
      demandOption:true,
      type:"string"
    }
  },
  handler: function(argv){
    console.log('title:' + argv.title);
    console.log('body:'+ argv.body);
  }
});

//create remove command
yargs.command({
  command: 'remove',
  describe: 'remove a  note',  builder:{
    remove:{
      describe:'remove note',
      demandOption:true
    }
  },
  handler: function(){
    console.log('removing note' + arguments.remove);
  }
});

//create list command
yargs.command({
  command: 'list',
  describe: 'list your notes',
  builder:{
    list:{
      describe:'list note',
      demandOption:true
    }
  },
  handler: function(){
    console.log('listing notes'+ args.list)
  }
});

//create read command
yargs.command({
  command:'read',
  describe:'read a note',
  builder:{
    readr:{
      describe:'read note',
      demandOption:true
    }
  },
  handler: function(){
    console.log('reading a note'+ args.read)
  }
});

console.log(yargs.argv);
