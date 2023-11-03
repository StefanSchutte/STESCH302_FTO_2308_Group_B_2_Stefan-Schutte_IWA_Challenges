const example1 = ()=> {
    console.log('hi')
    console.log(Math.random());
}
example1()

//func is 1st class citizens

const example2 = example1
const example3 = example1

example2()

//arguments and parameters
const customLog = ()=> {
    const text = 'hi world';
    const upperText = text.toUpperCase();
    console.log(upperText);
}
customLog();

const upperCaseLog = (text)=> {
    //const text = 'hi world';
    const upperText = text.toUpperCase();
    console.log(upperText);
}
upperCaseLog('hii world');
upperCaseLog('stefan');

//@ts-check

/**
 * @typedef{'toUpperCase'| 'toLowerCase'} nativeKeys
 */

/**
 *
 * converts a string value to either upper or lower case.
 *
 * logs a string to console. value passes will be randomly converted to upper or lower case
 * @param {string} text - the value to transform
 * @param {'uppercase' | 'lowecase'} [format="uppercase"] - how to transform case if no value is selected, one will be selected randomly
 */
const randomCaseLog = (text, format)=> {
    //const text2 = 'stringy'
//text.
    //logic

    /**
     *
     * @type {Record<format | 'random', nativeKeys>}
     */
    const formatMap = {
        random: Math.random() >= 0.5 ? 'toUpperCase' : 'toLowerCase',
        uppercase: 'toUpperCase',
        lowercase: 'toLowerCase',
    }
const method =  formatMap[format || 'random'];

    //const isUpper = Math.random() >= 0.5;
   //const method = isUpper ? 'toUpperCase' : 'toLowerCase';
    //const result = text[method]()
    //console.log(result);
    return text[method]() //if not used return returns undifined/void
}

//randomCaseLog('asdf', upperCaseLog)

const double = (value)=> {
    const results = value * 2
    return results
}

if(double(10) === 20 ){
    console.log('pass')
}else{
    double(10) !== 20
        console.log('fail');
    }
console.log(double(10))

parseInt('123', 10)


randomCaseLog('hii world');
randomCaseLog('String');
console.log(randomCaseLog('hii world'));
console.log(randomCaseLog('String'));
