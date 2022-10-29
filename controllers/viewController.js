const RESOURCE_PATH ='/games'

const viewController = {
    index(req,res,next){
        res.render('games/Index', res.locals.data)
    }, 
    show(req,res,next){
        res.render('games/Show', res.locals.data)
    }, 
    edit(req,res,next){
        res.render('games/Edit', res.locals.data)
    }, 
    newView(req,res,next){
        res.render('games/New')
    }, 
    redirectHome(req,res,next){
        res.redirect(RESOURCE_PATH)
    }, 
    redirectShow(req,res,next){
        res.redirect(RESOURCE_PATH + `/${req.params.id}`)
    }
}

module.exports = viewController