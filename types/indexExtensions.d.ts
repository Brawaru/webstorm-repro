import '~/declaration'

declare module '~/declaration' {
    interface Index {
        'hello-world': {
            something: string,
            somethingElse: number,
            strict: 42,
        }
    }
}