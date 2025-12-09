'use client';

import { useEffect, useRef } from 'react';



export default function TestPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const content1Ref = useRef<HTMLDivElement>(null);
    const content2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function adjustHeights() {
            const container = containerRef.current;
            const content1 = content1Ref.current;
            const content2 = content2Ref.current;

            if (!container || !content1 || !content2) return;

            // Get all header elements
            const headers = container.querySelectorAll('h2');

            // Calculate space taken by headers and padding
            let headersHeight = 0;
            headers.forEach(h => headersHeight += h.offsetHeight);

            // Get container padding
            const containerStyle = window.getComputedStyle(container);
            const containerPadding = parseFloat(containerStyle.paddingTop) + parseFloat(containerStyle.paddingBottom);

            // Get margin between elements (my-2 class)
            const marginBetween = parseFloat(window.getComputedStyle(headers[1]).marginTop) +
                parseFloat(window.getComputedStyle(headers[1]).marginBottom) +
                parseFloat(window.getComputedStyle(headers[0]).marginBottom);

            // Calculate available height for content divs
            const availableHeight = container.clientHeight - headersHeight - containerPadding - marginBetween;

            // Get natural scroll heights (content height)
            const content1ScrollHeight = content1.scrollHeight;
            const content2ScrollHeight = content2.scrollHeight;

            // Determine layout based on content
            if (content1ScrollHeight <= availableHeight/2 && content2ScrollHeight <= availableHeight/2) {
                console.log('Both fit');
                // Both fit naturally - use auto height
                content1.style.height = 'auto';
                content2.style.height = 'auto';
                content1.style.flexGrow = '0';
                content2.style.flexGrow = '0';
            } else if (content1ScrollHeight > availableHeight/2 && content2ScrollHeight > availableHeight/2) {
                // Both overflow - split space equally
                console.log('Both overflow');
                content1.style.height = (availableHeight / 2) + 'px';
                content2.style.height = (availableHeight / 2) + 'px';
                content1.style.flexGrow = '0';
                content2.style.flexGrow = '0';
            } else {
                console.log('One overflows');
                // One overflows, one doesn't
                if (content1ScrollHeight < availableHeight/2) {
                    // Content1 is large, content2 is small
                    content1.style.height = 'auto';
                    content1.style.flexGrow = '0';

                    // Give remaining space to content1
                    const remainingHeight = availableHeight - content1.scrollHeight;
                    content2.style.height = Math.min(remainingHeight, content2.scrollHeight) + 'px';
                    content2.style.flexGrow = '0';
                } else {
                    // Content2 is large, content1 is small
                    content2.style.height = 'auto';
                    content2.style.flexGrow = '0';

                    // Give remaining space to content2
                    const remainingHeight = availableHeight - content2.scrollHeight;
                    content1.style.height = Math.min(remainingHeight, content1.scrollHeight) + 'px';
                    content1.style.flexGrow = '0';
                }
            }
        }

        adjustHeights();
        const timeoutId = setTimeout(adjustHeights, 100);
        window.addEventListener('resize', adjustHeights);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', adjustHeights);
        };
    }, []);

    return (
        <div ref={containerRef} className="flex h-screen flex-col bg-gray-200 p-2 overflow-hidden">
            <h2 className="text-xl font-bold mb-2">Label 1</h2>

            {/* Content 1 */}
            <div ref={content1Ref} className="overflow-auto bg-yellow-200 p-2 rounded transition-all">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis dolore, sed distinctio quo sequi, maiores mollitia doloribus consectetur quas veniam ab rem architecto voluptatum, asperiores iste. Deleniti, commodi eveniet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis dolore, sed distinctio quo sequi, maiores mollitia doloribus consectetur quas veniam ab rem architecto voluptatum, asperiores iste. Deleniti, commodi eveniet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis dolore, sed distinctio quo sequi, maiores mollitia doloribus consectetur quas veniam ab rem architecto voluptatum, asperiores iste. Deleniti, commodi eveniet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis dolore, sed distinctio quo sequi, maiores mollitia doloribus consectetur quas veniam ab rem architecto voluptatum, asperiores iste. Deleniti, commodi eveniet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis dolore, sed distinctio quo sequi, maiores mollitia doloribus consectetur quas veniam ab rem architecto voluptatum, asperiores iste. Deleniti, commodi eveniet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis dolore, sed distinctio quo sequi, maiores mollitia doloribus consectetur quas veniam ab rem architecto voluptatum, asperiores iste. Deleniti, commodi eveniet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis dolore, sed distinctio quo sequi, maiores mollitia doloribus consectetur quas veniam ab rem architecto voluptatum, asperiores iste. Deleniti, commodi eveniet.
                Lorem ipslorem illum expedita labore maxime delectus aut tenetur et. Distinctio doloremque vo Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quia. Laborum perspiciatis possimus, ex officia quo vitae quibusdam itaque nulla cupiditate repellendus illo ad blanditiis sed eius animi
            </div>

            {/* Label 2 */}
            <h2 className="text-xl font-bold my-2">Label 2</h2>

            {/* Content 2 */}
            <div ref={content2Ref} className="overflow-auto bg-green-300 p-2 rounded transition-all">
                Content 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, natus voluptas. Reprehenderit qui labore aperiam in autem, alias, excepturi pra

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis dolore, sed distinctio quo sequi, maiores mollitia doloribus consectetur quas veniam ab rem architecto voluptatum, asperiores iste. Deleniti, commodi eveniet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis dolore, sed distinctio quo sequi, maiores mollitia doloribus consectetur quas veniam ab rem architecto voluptatum, asperiores iste. Deleniti, commodi eveniet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis dolore, sed distinctio quo sequi, maiores mollitia doloribus consectetur quas veniam ab rem architecto voluptatum, asperiores iste. Deleniti, commodi eveniet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis dolore, sed distinctio quo sequi, maiores mollitia doloribus consectetur quas veniam ab rem architecto voluptatum, asperiores iste. Deleniti, commodi eveniet.
               r sit amet, consectetur adipisicing elit. Nihil nobis hic necessitatibus dignissimos nostrum odio dolorem fugiat quidem non corporis. Delectus, explicabo quas! Officiis esse dolore iusto maiores pariatur nam, commodi eveniet quas itaque aperiam sit cupiditate similique velit quo voluptatum qui veritatis, quasi ipsam accusamus. At ad ipsam, animi laborum doloribus fugiat tenetur debitis ab nostrum iusto! Temporibus neque harum soluta nulla ipsa sint dolor, dolorum error commodi distinctio! Porro facere aliquam tempore! Nostrum laudantium laboriosam, ipsam quia facere molestias, cum quaerat ipsum ad commodi voluptas minus expedita earum, iste eius id ut molestiae in! Harum, nihil quo, soluta excepturi fugiat commodi suscipit eius dicta, dignissimos debitis odio numquam! Nihil quibusdam provident, voluptatum culpa officiis ullam quae aliquid ipsam ipsa quisquam sit veniam excepturi repellat corporis quia sapiente asperiores numquam voluptatem expedita tempore deleniti obcaecati. Et optio iste perferendis possimus minus ducimus ex, dolor aperiam voluptas corporis aliquid cupiditate pariatur rem ea. Vitae quibusdam voluptatum ratione possimus vel nemo impedit fugiat odit aut dolore, saepe est eos fuga modi velit. Harum ut ratione, blanditiis ipsum, quo sequi dolor similique atque, quaerat quis dolores nihil necessitatibus natus? Eius explicabo assumenda velit delectus alias nihil perspiciatis omnis eveniet voluptas, recusandae ratione aliquam quidem sint placeat ad natus hic unde, asperiores laudantium modi voluptatem corporis autem aspernatur. Voluptate, molestias? Accusantium nam quaerat unde placeat sed aliquid suscipit illum error commodi minima magnam, id corporis laborum quia non impedit atque assumenda consectetur a eveniet? Quidem eveniet dolore natus incidunt. Sit, dolorum fuga doloremque totam excepturi minima non distinctio recusandae blanditiis voluptate at suscipit itaque doloribus beatae, alias, praesentium cupiditate sint nemo illum sed ad eaque. Tenetur quaerat, iste, vero quibusdam exercitationem illum eius corporis rerum quas soluta eligendi optio ipsam vel aut amet rem repellendus quos eum possimus quam tempora. Delectus nostrum nobis, accusamus esse minus, placeat exercitationem mollitia asperiores sed dignissimos eligendi vel. A ipsa maxime culpa quod. Doloribus consectetur quae, facere iste impedit numquam ut accusamus dignissimos cum ipsa quo accusantium officia libero ex odio! Qui placeat aliquid esse voluptatum sed veniam quam soluta eos sunt fuga. Consectetur optio necessitatibus laboriosam molestias doloremque architecto, commodi pariatur facere harum id minus soluta mollitia similique neque ab assumenda ratione adipisci quia. Molestiae perferendis aperiam rem quos, ducimus dolore quaerat nemo molestias laudantium, dolor, quod animi temporibus laborum ipsa cupiditate pariatur ab eveniet vitae hic inventore! Dicta, velit. Totam optio commodi rem error aliquid accusamus facilis voluptatem modi quaerat quas quis asperiores, sed cumque quod quia, cupiditate illum nisi reprehenderit, iusto voluptas excepturi veniam sunt! Aperiam expedita aspernatur nam odit voluptas corporis nobis adipisci dolorum tenetur eveniet, amet facere veritatis facilis, aliquam dignissimos ipsa voluptates animi labore beatae quam accusantium architecto, iusto obcaecati! Quis sed harum magnam consequatur, quod voluptatum laborum tempora. Porro labore omnis accusamus est sint. Ipsum vel non debitis nulla dolorum quas ea veritatis sequi quasi, provident soluta porro alias est cumque magni nobis in, doloremque fuga iure! Ex illum molestias dolore saepe voluptatem voluptatibus rerum. Veritatis nesciunt exercitationem esse nulla!
            </div>
        </div>
    );
}