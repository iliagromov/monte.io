const axios = require('axios');
const fs = require('fs');
const BrandsJSON = require('./brands.json');
const YearsJSON = require('./years.json');


async function makeRequest(url) {
    try {

        const answer = await fetch(url, {
            timeout: 2000
        })

        if (!answer.ok) {
            throw new Error(answer.status.toString())
        }

        const responseJson = await answer.json()

        return responseJson
    } catch (e) {
        console.warn('Не удалось получить Makes', e)
        return e
    }
}

/* Общий массив для записи в файл */
var AllResults = {
    brands: [
    ]
}


/** в apiMakes получаю все Бренды и Модели */
async function apiMakes() {
    const url = 'https://montetuning.app';
    const brandsResponse = await makeRequest(`${url}/api/v1/makes`);


    brandsResponse && brandsResponse?.results.forEach((make, makeIDX) => {
        AllResults.brands.push({ brand: make, models: [] });

        const modelsResponse = makeRequest(`${url}/api/v1/models/?make=${make}&limit=999`);
        modelsResponse && modelsResponse.then(resultModels => {

            resultModels && resultModels.results.forEach((model, modelIDX) => {


                AllResults.brands[makeIDX].models.push({ model: model, engines: [] });

                /*
                движок получаю из файла чтобы не было блока по запросу
                const enginesResponse = makeRequest(`${url}/api/v1/engines/?make=${make}&model=${model}`);
                enginesResponse.then(resultEngines => {

                    resultEngines?.results.forEach(engine=>{
                        AllResults.brands[makeIDX].models[modelIDX].engines.push({engine: engine, years:[]});
                    })
                });*/
            });

        }).then(res => {
            let data = JSON.stringify(AllResults);
            // fs.writeFileSync('/home/user/Projects/gitlab/monte-front/src/seo-pages/brands.json', data);
        });
        /*
                modelsResponse && modelsResponse.then(resultModels=>{
          
                  console.log(resultModels.results);
                  const models = resultModels.results;
                  resultModels && resultModels.results.forEach(model=>{
                    console.log(`BRAND__${make}__MODEL__${model}`);
                    
                    const content = `BRAND__${make}__MODEL__${model}`;
        
                    fs.appendFile('/home/user/Projects/gitlab/monte-front/src/seo-pages/test.txt', content+ "\n", err => {
                        if (err) throw err;
                        console.log('Saved!');
                    });
                    
                    const enginesResponse = makeRequest(`${url}/api/v1/engines/?make=${make}&model=${model}`);
                     
                    if(enginesResponse){
                        console.log(enginesResponse);
                    }
                    enginesResponse.then(resultEngines => {
                        const content = `BRAND__${make}__MODEL__${model}`;
        
                        console.log(resultEngines.results);
                      resultEngines?.results.forEach(engine=>{
                        
                        const yearsResponse = Service.getInstance().getYears(make, model, engine);
                        yearsResponse.then(resultYeats=>{
                            console.log(resultYeats);
                          console.log(`BRAND__${make}__MODEL__${model}__Engines{engine}`);
                        });
                      });
                    });
                  });
                });
          */
    });
}

// apiMakes();
/** getEngines получаю движки по каждой модели записываю в файл  brandsEngine0-10 делю бренды чтобы не было перегруза по запросу*/
function getEngines(){
    /* Запускаю первые 10 брендов чтобы не было блока по запросу */
    // const brandsCount = JSONLostbrands.brands.slice(0, 5);
    const brandsCount = JSONLostbrands.brands.slice(5, 15);
    brandsCount.forEach((brand, makeIDX) => {
        // console.log(brand);
        AllResults.brands.push(brand);

        brand.models.forEach((model, modelIDX) => {
            /*Запускаю запрос по получению движка  */ 
            const enginesResponse = makeRequest(`https://montetuning.app/api/v1/engines/?make=${brand.brand}&model=${model.model}`);
            enginesResponse.then(resultEngines => {
                resultEngines?.results.forEach(engine => {
                    // brand.models[modelIDX].engines.push({title: engine})
                    AllResults.brands[makeIDX].models[modelIDX].engines.push({ engine: engine, years: [] });
                    // console.log( AllResults.brands[makeIDX].models[modelIDX].engines);
                    // AllResults.brands[makeIDX].models[modelIDX].engines.push({ engine: 'engine' });
                })
            }).then(res=>{
                let data = JSON.stringify(AllResults);
                // fs.writeFileSync('/home/user/Projects/gitlab/monte-front/src/seo-pages/engines/engines-lost-2.json', data);
                console.info('Well Done!');
            })
        });
    });
}
// getEngines();

/**getYears получаю года движков по каждому движдку по каждой модели по каждому бренду записываю в файл brandsYears0-5 делю бренды чтобы не было блока по запросу*/
function getYears() {
    /* Запускаю первые  брендов чтобы не было блока по запросу */
    // const EngineCount = JSONLostEngine1.brands.slice(0, 5);
    // const EngineCount = JSONLostEngine.brands.slice(5, 15);
    // console.log(brandsCount.length);
    JSONLostEngine2.brands.forEach((brand, makeIDX) => {
        // console.log(brand);
        AllResults.brands.push(brand);

        brand.models.forEach((model, modelIDX) => {
            /* Запускаю запрос по получению года для каждого движка*/

            brand.models[modelIDX].engines.forEach((engine, engineIDX) => {
                const yearsResponse = makeRequest(`https://montetuning.app/api/v1/years/?make=${brand.brand}&model=${model.model}&engine=${engine.engine}`);
                yearsResponse.then(resultYears => {
                    // console.log(resultYears);
                    resultYears.results.forEach(year => {
                        AllResults.brands[makeIDX].models[modelIDX].engines[engineIDX].years.push({ year: year });
                    });
                }).then(result => {
                    let data = JSON.stringify(AllResults);
                    // fs.writeFileSync('/home/user/Projects/gitlab/monte-front/src/seo-pages/years/years-lost-4.json', data);
                });
            });
            console.info('Well Done!');
        });
    });
}
// getYears();



/** Запускаю финальный скрип, который выдает список урлов записываю в файл urls*/
function getUrls(){
    const URLS = [];
    /*на переработанном файле объединяю url */
    JSONYearsArr.forEach(json=>{
        json.brands.forEach(brand =>{
            // fs.appendFileSync('/home/user/Projects/gitlab/monte-front/src/seo-pages/brands.txt', `${brand.brand}\n`);
            brand.models.forEach(model => {
                // fs.appendFileSync('/home/user/Projects/gitlab/monte-front/src/seo-pages/models.txt', `${brand.brand}-${model.model}\n`);
                model.engines.forEach(engine => {
                    // fs.appendFileSync('/home/user/Projects/gitlab/monte-front/src/seo-pages/engine.txt', `${brand.brand}-${model.model}-${engine.engine}\n`);
                    engine.years.forEach(year =>{
                        // let url = `https://montetuning.com/${brand.brand}-${model.model}-${engine.engine}-${year.year}\n`;
                        // let title = `${model.model} tune chip (chips tuning)\n`;
                        let description = `Chip tuning for your ${model.model}.  Specific performance tuning chip for you "${brand.brand}" with Monte Tuning\n`;
                        // URLS.push(url);
                        // fs.appendFileSync('/home/user/Projects/gitlab/monte-front/src/seo-pages/seo-title.txt', `${title}`);
                        // fs.appendFileSync('/home/user/Projects/gitlab/monte-front/src/seo-pages/seo-description.txt', `${description}`);
                    })
                });
            });
        })
    })
    let data = URLS;
    
}
// getUrls()


function createBrandPage(){
    JSONbrands.brands.forEach((brand, idx)=>{
        console.log(idx);
        let slug = brand.brand.split(' ').join('-').toLowerCase();

let modelsObj = brand.models.map(model =>{
    return  `"${model.model}"`
})

        let content = `---
sortIdx: ${idx}
slug: ${slug}
category: brands
title: ${brand.brand}
models: [${modelsObj}]
---`
        
        fs.writeFileSync(`/home/user/Projects/gitlab/monte-front/src/posts/brands/${slug}.mdx`, `${content}`);
    })
}
// createBrandPage()

function createYearsPage(){
    JSONYearsArr.forEach(json=>{
        json.brands.forEach(brand =>{
            // fs.appendFileSync('/home/user/Projects/gitlab/monte-front/src/seo-pages/brands.txt', `${brand.brand}\n`);
            brand.models.forEach(model => {
                // fs.appendFileSync('/home/user/Projects/gitlab/monte-front/src/seo-pages/models.txt', `${brand.brand}-${model.model}\n`);

                model.engines.forEach((engine, engineIDX) => {
// let titleBrand = brand.brand.split(' ').join('-').toLowerCase();
// let titleModel = model.model.split(' ').join('-').toLowerCase();
// let titleEngine = engine.engine.split(' ').join('-').toLowerCase();
// // let titleYear = engine.engine.split(' ').join('-').toLowerCase();
// let slug = `${titleBrand}-${titleModel}-${titleEngine}`;
// let slugSorted = slug.split('/').join('-');
// let title = `${brand.brand} ${model.model} ${engine.engine}`;
// let content = `---
// sortIdx: ${engineIDX}
// slug: ${slugSorted}
// category: engines
// title: ${title}
// ---`
//                         fs.writeFileSync(`/home/user/Projects/gitlab/monte-front/src/posts/engines/${slugSorted}.md`, `${content}`);
                    // fs.appendFileSync('/home/user/Projects/gitlab/monte-front/src/seo-pages/engine.txt', `${brand.brand}-${model.model}-${engine.engine}\n`);
                    engine.years.forEach((year, idx) =>{
let titleBrand = brand.brand.split(' ').join('-').toLowerCase();
let titleModel = model.model.split(' ').join('-').toLowerCase();
let titleEngine = engine.engine.split(' ').join('-').toLowerCase();
let titleYear = year.year;
let slug = `${titleBrand}-${titleModel}-${titleEngine}-${titleYear}`;
let slugSorted = slug.split('/').join('-');
let title = `${brand.brand} ${model.model} ${engine.engine} ${year.year}`;
                        // let title = `${model.model} tune chip (chips tuning)\n`;
                        // let description = `Chip tuning for your ${model.model}.  Specific performance tuning chip for you "${brand.brand}" with Monte Tuning\n`;
                        // URLS.push(url);
                        // fs.appendFileSync('/home/user/Projects/gitlab/monte-front/src/seo-pages/seo-title.txt', `${title}`);
let content = `---
sortIdx: ${idx}
slug: ${slugSorted}
category: years
title: ${title}
---`
                        fs.writeFileSync(`/home/user/Projects/gitlab/monte-front/src/posts/years/${slugSorted}.md`, `${content}`);
                    })
                });
            });
        })
    })
}

// createYearsPage();
function replaceSymbol(str) {
    let slugSorted0 = str.split(' ').join('-').toLowerCase();
    let slugSorted1 = slugSorted0.split('/').join('-');
    let slugSorted2 = slugSorted1.split('.').join('-');
    return slugSorted2;
  }


var PageJSON = {
    brands: [
    ]
}


/*
Эмуляция каталога для seo старниц
все страницы будут на первом уровне
{
    "brands": [
        {
            name: string
            slug: string
            path: string
            template: string
            contex: {
                id: 'id-number-slug',
                slug: string,
                pageData: {
                    title: string
                    description: string
                    titleH1: string
                    models?: []
                    engines?: []
                    years?: []
                    canonical?: string,
                    brand?: string,
                    model?: string,
                    engine?: string,
                    year?: string,
                }
            }
        }
    ]
}
*/
function generateJson(){
    YearsJSON.brands.forEach((brand, makeIDX) => {
        // console.log(brand);
        let slug = replaceSymbol(brand.brand);
        let pathBrand = slug;
        const context = {
          id: `id-${makeIDX}-${slug}`,
          slug: slug,
          pageData: {
            title: `${brand.brand} tune chip (chips tuning)`,
            description: `Chip tuning for your ${brand.brand}. Specific performance tuning chip for you  ${brand.brand} with Monte Tuning`,
            titleH1: brand.brand,
            models: brand.models,
            brand: `${brand.brand}`,
          }
        }
        

        // PageJSON.brands.push({ name: brand.brand, path:pathBrand, slug:slug, template: 'seo', context: context, models: []});
        PageJSON.brands.push({ name: brand.brand, path:pathBrand, slug:slug, template: 'seo', context: context});

        brand.models.forEach((model, modelIDX) => {

            let slug = replaceSymbol(model.model);
            let pathModel = slug;
            let context = {
              id: `id-${modelIDX}-${slug}`,
              slug: slug,
              pageData: {
                title: `${model.model} tune chip (chips tuning)`,
                description: `Chip tuning for your  ${model.model}. Specific performance tuning chip for you ${brand.brand} with Monte Tuning`,
                titleH1: `${brand.brand} ${model.model}`,
                engines: model.engines,
                brand: `${brand.brand}`,
                model: `${model.model}`,
              }
            }

            // PageJSON.brands[makeIDX].models.push({ name: `${brand.brand} ${model.model}`, path: `${pathBrand}/${pathModel}`, slug: slug, template: 'seo', context: context, engines: []});
            PageJSON.brands.push({ name: `${brand.brand} ${model.model}`, path: `${pathBrand}/${pathModel}`, slug: slug, template: 'seo', context: context});
    
          
            model.engines.forEach((engine, engineIDX) => {
    
              let slug = replaceSymbol(engine.engine);
              let pathEngine = slug;
              let context = {
                id: `id-${engineIDX}-${slug}`,
                slug: slug,
                pageData: {
                  title: `${engine.engine} tune chip (chips tuning)`,
                  description: `Chip tuning for your ${engine.engine}. Specific performance tuning chip for you ${brand.brand} with Monte Tuning`,
                  titleH1: `${brand.brand} ${model.model} ${engine.engine}`,
                  years: engine.years,
                  brand: `${brand.brand}`,
                  model: `${model.model}`,
                  engine: `${engine.engine}`,
                }
              }
            //   PageJSON.brands[makeIDX].models[modelIDX].engines.push({ name: `${brand.brand} ${model.model} ${engine.engine}`, path: `${pathBrand}/${pathModel}/${pathEngine}`, slug: slug, template: 'seo', context: context, years:[]});
              PageJSON.brands.push({ name: `${brand.brand} ${model.model} ${engine.engine}`, path: `${pathBrand}/${pathModel}/${pathEngine}`, slug: slug, template: 'seo', context: context});
    
    
              engine.years.forEach((year, yearIDX) => {
                let slug = `${pathBrand}-${pathModel}-${pathEngine}-${year.year}`;
             
                let context = {
                  id: `id-${yearIDX}-${slug}`,
                  slug: slug,
                  pageData: {
                    titleH1: `${brand.brand} ${model.model} ${engine.engine} ${year.year}`,
                    title: `${brand.brand} ${model.model} ${engine.engine} ${year.year} tune chip (chips tuning)\n`,
                    description: `Chip tuning for your ${model.model} ${engine.engine} ${year.year}. Specific performance tuning chip for you ${brand.brand} with Monte Tuning\n`,
                    canonical: `${pathBrand}/${pathModel}/${pathEngine}`,
                    brand: `${brand.brand}`,
                    model: `${model.model}`,
                    engine: `${engine.engine}`,
                    year: `${year.year}`,
                  }
                }
    
                // PageJSON.brands[makeIDX].models[modelIDX].engines[engineIDX].years.push({  name: `${brand.brand} ${model.model} ${engine.engine} ${year.year}`, path: slug, slug: slug, template: 'store',context: context});
                PageJSON.brands.push({  name: `${brand.brand} ${model.model} ${engine.engine} ${year.year}`, path: slug, slug: slug, template: 'store', context: context});
    
              });
            });
          });
    
      });

      let data = JSON.stringify(PageJSON);
      fs.writeFileSync('/home/user/Projects/gitlab/monte-front/PageDataSSR.json', data);
  
}
generateJson();