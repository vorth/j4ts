/*
 * Copyright (c) 1995, 2013, Oracle and/or its affiliates. All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Oracle designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Oracle in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Oracle, 500 Oracle Parkway, Redwood Shores, CA 94065 USA
 * or visit www.oracle.com if you need additional information or have any
 * questions.
 */
package java.awt;

import java.awt.image.ImageObserver;

import jsweet.lang.Interface;


public class Image {

	@Interface
	class ImageSource {
		public double width;
		public double height;
	}
	
	public Image(ImageSource source) {
		this.source = source;
	}
	
	public int getWidth(ImageObserver observer) {
		return (int)source.width;
	}

	public int getHeight(ImageObserver observer) {
		return (int)source.height;
	}

	public ImageSource source;

	// public abstract ImageProducer getSource();

	//public Graphics getGraphics();

	/**
	 * Use the default image-scaling algorithm.
	 * 
	 * @since JDK1.1
	 */
	public static final int SCALE_DEFAULT = 1;

	/**
	 * Choose an image-scaling algorithm that gives higher priority to scaling
	 * speed than smoothness of the scaled image.
	 * 
	 * @since JDK1.1
	 */
	public static final int SCALE_FAST = 2;

	/**
	 * Choose an image-scaling algorithm that gives higher priority to image
	 * smoothness than scaling speed.
	 * 
	 * @since JDK1.1
	 */
	public static final int SCALE_SMOOTH = 4;

	/**
	 * Use the image scaling algorithm embodied in the
	 * <code>ReplicateScaleFilter</code> class. The <code>Image</code> object is
	 * free to substitute a different filter that performs the same algorithm
	 * yet integrates more efficiently into the imaging infrastructure supplied
	 * by the toolkit.
	 * 
	 * @see java.awt.image.ReplicateScaleFilter
	 * @since JDK1.1
	 */
	public static final int SCALE_REPLICATE = 8;

	/**
	 * Use the Area Averaging image scaling algorithm. The image object is free
	 * to substitute a different filter that performs the same algorithm yet
	 * integrates more efficiently into the image infrastructure supplied by the
	 * toolkit.
	 * 
	 * @see java.awt.image.AreaAveragingScaleFilter
	 * @since JDK1.1
	 */
	public static final int SCALE_AREA_AVERAGING = 16;

	public void flush() {
		// do nothing
	}

}
