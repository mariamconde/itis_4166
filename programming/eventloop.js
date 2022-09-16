//Event Loop
//nodeJS uses asycnhronous, non-blocking I/O model

//event loop (single-threaded): cahsier
//thread pool: workers in the back
//event queue: event loop will continue with other task in the queue
//once operation finishes, thread notifies event loop
//event loop will execute the callback function

//libuv (library) to support asynchronous operatiom