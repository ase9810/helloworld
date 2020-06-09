import React from 'react'
import MathJax from 'react-mathjax2'

const abc = "안녕"
const content = `$$ 1\\frac{6}{11} + 4\\frac{7}{11} $$`

function ProblemPage() {
    return (
        <div>
            <MathJax.Context
                input='ascii'
                onLoad={() => console.log("Loaded MathJax script!")}
                onError={(MathJax, error) => {
                    console.warn(error);
                    console.log("Encountered a MathJax error, re-attempting a typeset!");
                    MathJax.Hub.Queue(
                        MathJax.Hub.Typeset()
                    );
                }}
                script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=AM_HTMLorMML"
                options={{
                    asciimath2jax: {
                        useMathMLspacing: true,
                        delimiters: [["$$", "$$"]],
                        preview: "none",
                    }
                }}
            >
                <div>
                    <MathJax.Text text={content} />
                </div>
            </MathJax.Context>
        </div>
    );
}

export default ProblemPage