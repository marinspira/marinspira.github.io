import { useContext, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { HeaderVisibilityContext } from "../../contexts/headerVisibilityContext";
import { caseStudies } from "./cases";
import * as C from "./styles";

function Cases({ caseStudy = caseStudies[0] }) {
    const sectionRef = useRef(null);
    const contentPanelRef = useRef(null);
    const videoRef = useRef(null);
    const previewWheelLockRef = useRef(false);
    const sectionIdRef = useRef(`case-section-${caseStudy.title}`);
    const hideHeaderTimeoutRef = useRef(null);
    const lastContentScrollRef = useRef(0);
    const { setHeaderHiddenBySection, setShowDock } = useContext(HeaderVisibilityContext);
    const [markdown, setMarkdown] = useState("");
    const [previewProgress, setPreviewProgress] = useState(0);
    const [manualPreviewProgress, setManualPreviewProgress] = useState(null);
    const initialMediaAnchor = caseStudy.initialMediaAnchor === undefined
        ? caseStudy?.media?.[0]?.anchor
        : caseStudy.initialMediaAnchor;
    const [activeMediaAnchor, setActiveMediaAnchor] = useState(initialMediaAnchor);

    const activeMedia = caseStudy.media?.find((item) => item.anchor === activeMediaAnchor);
    const isScrollingImage = activeMedia?.type === "image" && activeMedia?.syncWithScroll !== false;
    const visiblePreviewProgress = manualPreviewProgress ?? previewProgress;
    const videoMedias = caseStudy.media?.filter((item) => item.type === "video") || [];

    useEffect(() => {
        let isMounted = true;

        if (!caseStudy.content) {
            setMarkdown("");
            return undefined;
        }

        if (caseStudy.content.includes("\n")) {
            setMarkdown(caseStudy.content);
            return undefined;
        }

        fetch(caseStudy.content)
            .then((response) => response.text())
            .then((text) => {
                if (isMounted) setMarkdown(text);
            })
            .catch(() => {
                if (isMounted) setMarkdown("");
            });

        return () => {
            isMounted = false;
        };
    }, [caseStudy.content]);

    useEffect(() => {
        setActiveMediaAnchor(initialMediaAnchor);
        setPreviewProgress(0);
        setManualPreviewProgress(null);
        lastContentScrollRef.current = 0;
    }, [caseStudy, initialMediaAnchor]);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                window.clearTimeout(hideHeaderTimeoutRef.current);
                hideHeaderTimeoutRef.current = window.setTimeout(() => {
                    setHeaderHiddenBySection(sectionIdRef.current, entry.isIntersecting);
                    if (entry.isIntersecting && videoRef.current) {
                        videoRef.current.currentTime = 0;
                        videoRef.current.play().catch(() => {});
                    }

                    if (!entry.isIntersecting) {
                        setShowDock(true);
                        if (videoRef.current) {
                            videoRef.current.pause();
                            videoRef.current.currentTime = 0;
                        }
                        setPreviewProgress(0);
                        setManualPreviewProgress(null);
                        if (contentPanelRef.current) {
                            contentPanelRef.current.scrollTop = 0;
                        }
                    }
                }, 80);
            },
            { threshold: 0.6 }
        );

        observer.observe(section);

        return () => {
            window.clearTimeout(hideHeaderTimeoutRef.current);
            observer.disconnect();
            setHeaderHiddenBySection(sectionIdRef.current, false);
        };
    }, [setHeaderHiddenBySection]);

    const syncMediaWithAnchors = (panel) => {
        if (!panel || !caseStudy.media?.length) return;

        const anchors = Array.from(panel.querySelectorAll("[data-media-anchor]"));
        const panelRect = panel.getBoundingClientRect();
        const activationLine = panelRect.top + panel.clientHeight * 0.45;
        const currentAnchor = anchors.reduce((current, anchor) => {
            const anchorTop = anchor.getBoundingClientRect().top;
            return anchorTop <= activationLine ? anchor.dataset.mediaAnchor : current;
        }, initialMediaAnchor);

        if (currentAnchor) setActiveMediaAnchor(currentAnchor);
    };

    const handleContentScroll = () => {
        const panel = contentPanelRef.current;

        if (!panel) return;

        syncMediaWithAnchors(panel);

        const isScrollingUp = panel.scrollTop < lastContentScrollRef.current;
        setShowDock(isScrollingUp || panel.scrollTop <= 20);
        lastContentScrollRef.current = panel.scrollTop;
    };

    const handlePreviewWheel = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (event.target?.tagName === "INPUT" || previewWheelLockRef.current) {
            return;
        }

        if (isScrollingImage) {
            const nextProgress = Math.min(1, Math.max(0, previewProgress + event.deltaY / 1400));
            const canScrollImage = nextProgress !== previewProgress;

            if (canScrollImage) {
                setManualPreviewProgress(null);
                setPreviewProgress(nextProgress);
                return;
            }
        }
    };

    const handlePreviewRangeChange = (event) => {
        const progress = Number(event.target.value) / 100;
        setManualPreviewProgress(progress);
        setPreviewProgress(progress);
    };

    const handleMediaSelectorClick = (anchor) => {
        setActiveMediaAnchor(anchor);
    };

    const renderMedia = () => {
        if (!activeMedia) return null;

        if (activeMedia.type === "video") {
            return (
                <>
                    <C.MediaFrame key={activeMedia.anchor}>
                        <video
                            ref={videoRef}
                            key={activeMedia.src}
                            src={activeMedia.src}
                            poster={activeMedia.poster}
                            controls
                            playsInline
                            muted={activeMedia.muted ?? true}
                            autoPlay={activeMedia.autoPlay ?? true}
                            loop={activeMedia.loop ?? true}
                        />
                    </C.MediaFrame>
                </>
            );
        }

        return (
            <>
                <C.ScreenshotTrack $progress={isScrollingImage ? visiblePreviewProgress : 0}>
                    <img src={activeMedia.src} alt={activeMedia.alt || caseStudy.title} />
                </C.ScreenshotTrack>
                {/* {isScrollingImage && (
                    <C.PreviewRange
                        type="range"
                        min="0"
                        max="100"
                        value={Math.round(visiblePreviewProgress * 100)}
                        onChange={handlePreviewRangeChange}
                        $previewBackground={caseStudy.theme?.previewBackground}
                        aria-label={`Scroll ${caseStudy.title} image`}
                    />
                )} */}
            </>
        );
    };

    return (
        <C.Section ref={sectionRef} aria-label={`${caseStudy.title} case study`}>
            <C.PreviewPanel onWheel={handlePreviewWheel} $background={caseStudy.theme?.previewBackground}>
                {renderMedia()}
                {videoMedias.length > 1 && (
                    <C.VideoSelector aria-label={`${caseStudy.title} videos`}>
                        {videoMedias.map((media) => (
                            <button
                                key={media.anchor}
                                type="button"
                                className={media.anchor === activeMediaAnchor ? "active" : ""}
                                onClick={() => handleMediaSelectorClick(media.anchor)}
                                aria-label={media.caption || media.anchor}
                            >
                                {media.caption || media.anchor}
                            </button>
                        ))}
                    </C.VideoSelector>
                )}
            </C.PreviewPanel>

            <C.ContentPanel ref={contentPanelRef} onScroll={handleContentScroll}>
                <C.ContentInner>
                    {caseStudy.eyebrow && (
                        <C.Eyebrow $color={caseStudy.theme?.previewBackground}>
                            {caseStudy.eyebrow}
                        </C.Eyebrow>
                    )}
                    <h2>{caseStudy.title}</h2>

                    {caseStudy.meta?.length > 0 && (
                        <C.MetaGrid>
                            {caseStudy.meta.map((item) => (
                                <C.MetaItem key={item.label}>
                                    <small>{item.label}</small>
                                    <strong>{item.value}</strong>
                                </C.MetaItem>
                            ))}
                        </C.MetaGrid>
                    )}

                    <C.MarkdownContent>
                        <ReactMarkdown
                            components={{
                                a: ({ href, children }) => {
                                    const mediaAnchor = href?.replace(/^#(?:video|media)-/, "");

                                    if (href?.startsWith("#video-") || href?.startsWith("#media-")) {
                                        return (
                                            <C.MediaAnchor
                                                id={href.replace("#", "")}
                                                data-media-anchor={mediaAnchor}
                                                aria-hidden="true"
                                            />
                                        );
                                    }

                                    return <a href={href}>{children}</a>;
                                },
                            }}
                        >
                            {markdown}
                        </ReactMarkdown>
                    </C.MarkdownContent>
                </C.ContentInner>
            </C.ContentPanel>
        </C.Section>
    );
}

export default Cases;
