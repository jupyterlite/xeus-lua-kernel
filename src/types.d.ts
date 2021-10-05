declare module 'worker-loader!*' {
  class WebpackWorker extends Worker {
    constructor();
  }

  export default WebpackWorker;
}

declare module '*.wasm' {
  const value: string;
  export default value;
}

declare module '*xeus_lua' {
  let CreateXeusModule: any;
  export default CreateXeusModule;
}
