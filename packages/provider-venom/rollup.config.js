import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
    input: ['src/index.ts'],
    output: [
        {
            dir: 'dist',
            entryFileNames: '[name].cjs',
            format: 'cjs',
            exports: 'named',
        },
    ],
    plugins: [
        json(),
        nodeResolve({
            resolveOnly: (module) => !/ffmpeg|@bot-whatsapp\/bot|venom-bot|sharp/i.test(module),
        }),
        nodeResolve(),
        commonjs(),
        typescript(),
    ],
}
